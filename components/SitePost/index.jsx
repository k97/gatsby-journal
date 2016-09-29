import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'
import './style.css'
import '../../static/css/highlight.css'


class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        const home = (
        <div className="cust-header">
          <Link className='gohome' to={ prefixLink('/') }>
            <i className="icon-back icon-ion-ios-arrow-thin-left"></i>
            <span>K97</span>
          </Link>
        </div>
        )

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                  <div className='date-published'>
                      <em>Published on: { moment(post.date).format('DD MMMM YYYY, hh:mm A') }</em>
                    {/* <em>Published On: { moment(post.datePublished).format('DD MMM YYYY') }</em> */}
                  </div>
                </div>
                <div className='footer'>
                  <ReadNext post={ post } {...this.props}/>
                  <hr></hr>
                  <p>
                    <span dangerouslySetInnerHTML={ { __html: config.siteDescr } } />
                    <a href={ config.siteTwitterUrl }>
                      <br></br> <strong>{ config.siteAuthor }</strong> on Twitter</a>
                  </p>
                </div>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
