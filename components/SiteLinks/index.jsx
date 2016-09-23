import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/ionicons/style.css'

class SiteLinks extends React.Component {
    render() {

        return (
            <div className='blog-social'>
              <ul>
                <li>
                  <a href={ config.siteTwitterUrl }><i className='ion-social-twitter-outline'></i></a>
                </li>
                <li>
                  <a href={ config.siteGithubUrl }><i className='ion-social-github-outline'></i></a>
                </li>
              </ul>
            </div>
            );
    }
}

export default SiteLinks
