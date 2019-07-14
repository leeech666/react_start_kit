import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

function ProductHowItWorks(props) {
  const { classes } = props

  return (
    <div id="about">
      <div className="container">
        <div className="bodyResume">
          <h4>01</h4>
          <h1>
            Know <br /> About me
          </h1>
          <br />
          <div className="h50" />
          <p>
            • Hands on experience(<b>TDD, Code-Splitting</b>) in creating React
            components;
          </p>
          <p>
            • Understanding the web development process (design, develop,
            deploy);.
          </p>
          <p>
            • Ability to work effectively while working as a team member as well
            as individually;
          </p>
          <p>
            • Extensive knowledge in developing single - page applications (
            <b>SPAs</b>);
          </p>
          <p>
            • Experience in <b>RESTful</b> web services to integrate between{' '}
            <b>Server Side to Client Side</b>;
          </p>
          <p>
            • Worked on an <b>Agile (Scrum)</b> Development Team to deliver
            regular updates to business team and project managers;
          </p>
          <p>
            • Coding tool <b>VSCode+ESLint+Prettier </b>for developing;
          </p>
          <p>
            • Programming Languages:{' '}
            <b>
              React16.8, React-Redux7.0 , Redux4.0, React-routerV5,
              <br />
              &nbsp;&nbsp;Redux-thunk+Axios, Node.js/Express.js
            </b>
            ;
          </p>
          <p>
            • Components library: <b>@Material-ui4.1</b>;
          </p>
          <p>
            • Unit testing: <b>Jest+Enzyme</b>;
          </p>
          <p>
            • For Security: using <b>JWT token</b>;
          </p>
          <p>
            • Databases: <b>MySQL, MongoDB</b>;
          </p>
          <p>
            • Deployment: <b>CentOS 7.3+Nginx1.15</b>;
          </p>
          <p>
            • Other: <b>Photoshop, AutoCAD, Echarts , Python/Anaconda</b>;
          </p>
          <p>
            • Basic knowledge of machine learning(Genetic Algorithm,
            Randomforest, LSTM);
          </p>

          <div className="h50" />
        </div>
        <div className="aboutImgDiv">
          <div className="aboutBorder" />
          <img
            src="/static/images/about-img.jpg"
            width="400"
            alt=""
            align="right"
            data-aos="fade-right"
            data-aos-delay="0"
          />
        </div>
      </div>
    </div>
  )
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHowItWorks)
