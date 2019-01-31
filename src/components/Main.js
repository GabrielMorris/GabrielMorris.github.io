import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import emCES from '../images/electric-mirror.jpeg'
import lyftHub from '../images/lyft-hub.jpg'
import thinkful from '../images/thinkful.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>

          {/* BEGIN ELECTRIC MIRROR */}
          <h3>Electric Mirror - Senior Software Engineer</h3>

          <span className="image main">
            <img src={emCES} alt="" />
          </span>

          <p>
            Developed React Native Android applications for residential and
            hospitality smart mirrors and IoT devices. Built React
            administrative portal for smart device management with integrated
            analytics dashboard. Helped design and scale infrastructure on
            Amazon Web Services, utilizing EC2, ECS, DynamoDB, MariaDB, SQS, and
            S3.
          </p>

          <p>
            Built Node.js backend API servers to connect with our React
            frontend, React Native Android apps, manage hospitality guest
            services, and retrieve, parse, and manage smart device analytics.
          </p>
          {/* END ELECTRIC MIRROR */}

          {/* BEGIN THINKFUL */}
          <h3>Thinkful - Software Engineering Apprenticeship</h3>

          <span className="image main">
            <img src={thinkful} alt="" />
          </span>

          <p>
            Paired with seasoned industry professionals to learn industry best
            practices and practical software development standards in a real
            world environment with a focus on HTML5, CSS3, JavaScript, Node.js,
            React, React Native, Redux, and algorithms and data structures.
            Created and deployed mobile-first Single Page Applications while
            learning new languages and frameworks
          </p>
          {/* END THINKFUL */}

          {/* BEGIN LYFT */}
          <h3>Lyft - Competitive Intelligence</h3>

          <span className="image main">
            <img src={lyftHub} alt="" />
          </span>

          <p>
            Developed local competitive intelligence network, increasing network
            size by over 300%. Provided actionable strategic and tactical
            intelligence to local market leadership and organization executives.
            Assisted in creation of standardized best practices for informant
            recruitment and retention across the organization. Helped increase
            Lyft local market share by 25% by anticipating driver needs and
            competitor strategies.
          </p>
          {/* END LYFT */}
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            I'm a Pacific Northwesterner, desert fanatic, and a software
            engineer with a passion for building beautiful, accessible software.
          </p>

          <p>
            I believe that technology is at its best when it empowers everyone,
            and to that end I strive to develop software applications with a
            strong vision that can be used to make the world a better, more
            diverse, and more accepting place for every person in the world.
          </p>

          <p>
            I enjoy minimalism, environmentalism, road trips, hiking, mountains,
            films, electronic music, role-playing games, throwing snowballs, and
            making my smart home ridiculously complex and fully automated.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
