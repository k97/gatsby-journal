---
title: "The next iteration"
date: "2016-09-23T22:12:03.284Z"
layout: post
path: "blog/the-next-iteration/"
category: ""
description: "I'm doing yet another iteration on my website. Unlike the previous versions, I want the next one to hold for a longer span with minimal changes, if required. In the coming weeks, I'm planning to log the process so it can stay as a reference material."
---

*I'm doing yet another iteration on my website. Unlike the previous versions, I want the next one to hold for a longer span with minimal changes, if required. In the coming weeks, I'm planning to log the process so it can stay as a reference material.*

# The Problem(s)
The last verion had some teething issues in terms of logging data across the sections. Every time I had to deal with the data, either the setup was getting in the way or the templates. Setting up Angular and Jekyll didn't really work out in hindsight and gh-pages wasn't ideal in maintaining the blog and the portfolio separately. Apparently, I lost the setup for the blog and the re-setup was tedious that I couldn't fire up the blog again. I want to avoid all this in the next version, so that I can keep the logging process simple.

# Resolution
The content is going to be in Markdown, so that's sorted. Now, the choice are bettween either compiling the markdown on the browser using a parser or generate it during deployment and then serve the content as static pages or as services. This might involve a backend module using ExpressJS, hosted in Heroku or similar providers.

# Designs
I have a few wireframes and a couple of design shots just for color references. Those 2 design look plenty enough for me to start the work. As far as iterations are concerned, as usual I will be doing it on the browser while coding. The idea is to consume my RescueTime data and display the my usage analytics at a high level for the initial release. This will allow me to gather data from multiple devices to a single public interface.

The idea of habit tracking or time tracking tool was something I wanted to do for quite sometime. In the meantime I was thinking about this, Gyroscope was released. Gyroscope is an app that shows a consolidated interface of all the user data from multiple APIs in a single interface. No one can deny the fact that Gyroscope is a beautifully designed application. I got inspired by that app and it sort gave me an rough idea on how I can approach my thoughts. To set things clear, I am gonna try hard enough not to copy anything intentionally from there, which by itself is quite a design challenge.

# What's ahead?
The intention is to keep the portfolio and the blog section separate as the old site. Only this time around, I've to be extra careful in managing the modules being independent. To achieve that, I'm planning to build the whole technical solution using a single framework. After using NG2 for an app at work, I was quite convinced with the component architechture, plus I've been working with AngularJS for quite sometime now. Besides, I want to check things on other frameworks like, Aurelia and ReactJS. The React ecosystem particularly looks more interesting and the added buzz makes it more appealing than Aurelia. I think its the right time to do this project using it and experiment with its concepts.

With some much in the backlog and other projects taking majority of my time, its going to be tricky to manage time in the coming days. But I've wasted enough time postponing this work and I'm just excited to work with React, so I gonna build the momentum and try to complete the work in few weeks.

