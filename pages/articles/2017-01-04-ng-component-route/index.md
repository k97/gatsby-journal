---
title: "Angular 1.x Component & Routes"
date: "2017-01-04T09:59:59.932Z"
layout: post
path: "journal/ng-component-routes/"
readNext: "journal/requirement-gathering/"
category: ""
description: "Using the ui-router beta with NG 1.5.x component and porting the old modules & routes to the new UI router."
---

*Using the ui-router beta with ng 1.5.x component and porting the old routers to the new UI router.*

The intention of this post is to quickly log my experience with an angular 1.5+ based application. I have been working on several angular projects for quite some time now, most of the projects are 1.x based and few are on ng2. Among those 1.x projects, there was huge one which started on v1.3.x sometime back in 2015. I joined this project late 2016 for a new development activity. By this time, I recently completed some work on a ng2 project and from the experiences of it, I knew sooner or later we had to port the current app slowly towards component based approach. So, we planned out the framework upgrades incrementally and started rolling out them one by one. The initial upgrades were quite easy without much breaking changes and when we hit 1.5.0, we were excited to start using the component pattern.

The [angular docs](https://docs.angularjs.org/guide/component) was a good place to start and the [blog](https://toddmotto.com/angular-1-5-lifecycle-hooks) [posts](https://toddmotto.com/exploring-the-angular-1-5-component-method/) from [Todd](https://toddmotto.com/one-way-data-binding-in-angular-1-5/) were all really helpful in terms of dealing with the new patterns. We started off creating new components as widgets for the app. The app's core module was a form builder of sorts. This module consisted of many widgets, which were supposed to be reused and the obvious thing was to hit the component approach in full throttle. For the routing part, we looked at the angular's in-house router, and it had a warning sign for deprecation. But there was reference pointing to use the ui-router’s component version.

<figure>
	<img src="./ngrouterannouncement.jpg" alt="Deprecation Notice">
	<figcaption>Deprecation Notice: Component Router for AngularJS 1.5</figcaption>
</figure>

The ui-router's setup was slick since we were already using an old version of ui-router and we had to deal with few broken routes while porting but it was worth it. The form builder module itself deserves a separate log, I will try to cover it later. If not, I will record it as a workflow/case-study in the new site that I'm working on. So, the route configuration looks like this:

<script src="https://gist.github.com/k97/adb17ef598ac2abd3a84ea6e9fc88aec.js"></script>

It obviously addressed the concerns of tightly coupling the views with controllers and promote reusable pieces of code. Another big sigh of relief was passing the state via the router. Now thanks to the bindings of ng 1.5 component pattern, we can use and abuse property bindings, event lifecycle hooks and mostly importantly setup the codebase more favorable for a ng-upgrade towards ng2.

As a hot tip, one-way binding is pretty easy now with the component pattern and the new router. When creating any component with bindings, just make sure it’s started with one-way binding. Most of the functionality can be achieved this way and if some edge case crops up, then we can revisit that particular property with other means. By using the component bindings, I was able to refactor the old functionality which existed earlier as two-way binding hell to a slick one-way data flow.

The next slick thing that was really easy to create and maintain was a dynamic widget creation as scope-isolated components. Long story short, the components were created from a configuration through an attribute directive and then compiled to a DOM element through `$compile` before injecting back to the app. Once added to the DOM, the element starts to run as an usual ng component. This basically, gave us the flexibility to create dynamic components and reuse the configuration across the app. The directive looks something like the below:

<script src="https://gist.github.com/k97/09ebb01cde3849427bab3327d598b127.js"></script>

The next planned activity is to fully modularize the app with ES6 modules before starting the ng-upgrade, which is planned down the line. But looking at the router set up and the lesser state dependency with other modules, I think the upgrade should be quite simple and straight forward.
