import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { withRouter, Route, Switch } from 'react-router-dom'
import { actions as snackAction } from '../SnackBar/'
import { connect } from 'react-redux'
import Project from './components/project'
import Summary from './components/summary'
import Working from './components/working'
//import localStyles from './style.css'
import './style.css'
const styles = theme => ({
  paper: {
    width: 1400,
    margin: 'auto',
    overflow: 'hidden'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: 'block'
  },
  addUser: {
    marginRight: theme.spacing.unit
  },
  contentWrapper: {
    margin: '40px 16px'
  }
})

function Content(props) {
  const { classes } = props

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <div>
          <Switch>
            <Route path="/resume" exact component={Summary} />
            <Route path="/resume/experience" component={Working} />
            <Route path="/resume/project" component={Project} />
            <Route
              path="/resume/education"
              component={() => (
                <h3>Bachelor degree, Xi'an Engineering University </h3>
              )}
            />
            <Route
              path="/resume/certificate"
              component={() => <h3>SAS advanced programmer Certificate</h3>}
            />
            <Route
              path="/resume/special"
              component={() => (
                <div
                  class="section"
                  id="home"
                  data-stellar-background-ratio="0.5"
                >
                  <div class="container">
                    <div class="disply-table">
                      <div
                        class="table-cell"
                        data-aos="fade-up"
                        data-aos-delay="0"
                      >
                        <h4>Chang Li</h4>
                        <h1>
                          React <br /> &<br />
                          Redux Developer
                        </h1>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    </Paper>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
}
const mapDispatchToProps = dispatch => {
  return {
    onHandleClose: (open, msg, seconds) => {
      dispatch(snackAction.snackbarChange(open, msg, seconds))
    }
  }
}
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(withStyles(styles)(Content))
)
