import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

function App(props) {
  // const { classes } = props

  return (
    <div id="experience">
      <div className="container">
        <div className="col-md-12">
          <h4>02</h4>
          <h1 className="size-50">
            My <br /> Experience
          </h1>
          <div className="h-50" />
        </div>
        <div className="col-md-12">
          <ul className="timeline">
            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">
                  August 2016 - Present
                </p>
                <h3>Web Developer</h3>
                <h4> Informatique Athensoft</h4>
                <p>
                  • Translate designs to front-end code; <br />
                  • Actively involved in fine tuning the application; <br />
                  • Interacted with the design team to add extra new features to
                  the project; <br />
                  • Used Media Queries for the design to be compatible in all
                  devices; <br />
                  • Used React-Router to turn application into Single Page
                  Application; <br />
                  • Used React-Redux to polish the data and for single
                  directional flow; <br />
                  • Provide assistance to the back-end developers ; <br />•
                  Worked with QA team on daily basis in fixing the reported
                  bugs/defects
                  <br /> and checking cross platform compatibility; .
                </p>
              </div>
            </li>
            <li
              className="timeline-event"
              data-aos="fade-up"
              data-aos-delay=".2"
            >
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">
                  March 2016 - July 2016
                </p>
                <h3>SAS developer</h3>
                <h4>MPR Consulting Ltd.</h4>
                <p>
                  • Create SAS data table and non SAS table ;<br />
                  • Combine vars to make new vars (using proc transpose);
                  <br />
                  • Manipulate large data and proceed data cleansing to complete
                  customers’ segmentation (geographic or demographic)
                  <br /> and retention (churn rate research) by applying SAS
                  datastep, SQL and Macro ;
                </p>
              </div>
            </li>
            <li
              className="timeline-event"
              data-aos="fade-up"
              data-aos-delay=".4"
            >
              <label className="timeline-event-icon" />
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">January 2009</p>
                <h3>Programmer</h3>
                <h4>Display point 1 company</h4>
                <p>
                  • Using AUTOCAD to make 2D or 3D drawings
                  <br />• Using MASTERCAM to make programs
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
