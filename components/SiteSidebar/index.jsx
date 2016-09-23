import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNav from '../SiteNav'
import SiteLinks from '../SiteLinks'
import './style.css'
import profilePic from '../../pages/k97-square.png'

class SiteSidebar extends React.Component {
    render() {
        const {location, children} = this.props
        const isHome = location.pathname === prefixLink('/')

        let header = (
            <header>
              <Link style={ {    textDecoration: 'none',    borderBottom: 'none',    outline: 'none'} } to={ prefixLink('/') }>
                <img src={prefixLink(profilePic)} width='75' height='75' />
              </Link>
              { isHome ? (
                <h1><Link style={ {    textDecoration: 'none',    borderBottom: 'none',    color: 'inherit'} } to={ prefixLink('/') }> { config.siteAuthor } </Link></h1>
                ) :
                <h2><Link style={ {    textDecoration: 'none',    borderBottom: 'none',    color: 'inherit'} } to={ prefixLink('/') }> { config.siteAuthor } </Link></h2> }
                <p dangerouslySetInnerHTML={ {__html: config.siteDescr} } ></p>
            </header>
        )

        return (
            <div className='sidebar cust-sidebar'>
              <div className='sidebar-inner'>
                <div className='blog-details'>
                  <header>
                    { header }
                  </header>
                </div>
                <div className='blog-options'>
                  <footer>
                    <SiteLinks {...this.props}/>
                    <p className='copyright'>
                      &copy; All rights reserved.
                    </p>
                  </footer>
                </div>
              </div>
            </div>
            );
    }
}

SiteSidebar.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteSidebar
