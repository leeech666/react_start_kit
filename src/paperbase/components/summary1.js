import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  about: {
    padding: '10px 0'
  },

  container: {
    display: 'flex'
  },
  aboutImgDiv: {
    margin: '-200px auto'
  },
  img: {
    margin: '-200px 0'
  },
  aboutBorder: {
    position: 'relative',
    border: '10px solid #425BB5',
    width: '400px',
    height: '400px',
    top: '410px',
    left: '100px',
    zIndex: '1',
    float: 'left'
  },
  summary: {
    width: '100%'
  },
  bodyResume: {
    fontFamily: `'Open Sans', sans-serif`,
    fontSize: '14px',
    lineHeight: '24px',
    width: '80%',
    margin: 'auto'
  },
  h1: {
    fontFamily: `'Playfair Display', serif`,
    fontSize: '60px',
    lineHeight: '50px'
  },

  h4: {
    fontFamily: `'Lato', sans-serif`,
    textTransform: 'capitalize',
    letterSpacing: '2px',
    position: 'relative',
    color: '#425bb5',
    marginLeft: '40px',
    fontWeight: '900',
    '&::before': {
      position: 'absolute',
      width: '30px',
      left: '-40px',
      content: `''`,
      display: 'block',
      height: '2px',
      background: '#425bb5',
      top: '9px'
    }
  }
})

function ProductHowItWorks(props) {
  const { classes } = props

  return (
    <div className={classes.about}>
      <div className={classes.container}>
        <div className={classes.bodyResume}>
          <h4 className={classes.h4}>01</h4>
          <h1 className={(classes.size50, classes.h1)}>
            Know <br /> About me
          </h1>
          <br />
          <div className={classes.h50} />
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
              Redux-thunk+Axios, Node.js/Express.js
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

          <div className={classes.h50} />
        </div>
        <div className={classes.aboutImgDiv}>
          <div className={classes.aboutBorder} />
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
