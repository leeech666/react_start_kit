import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Status from './status.js'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  img: {
    maxWidth: 200
  }
})

const Weather = ({ weatherData, ...others }) => {
  switch (weatherData.status) {
    case Status.WAITING: {
      return <div>Click the above Button to Get Data</div>
    }
    case Status.LOADING: {
      return (
        <div>
          LOADING.......
          <span>
            <CircularProgress />
          </span>
        </div>
      )
    }
    case Status.SUCCESS: {
      const { classes } = others
      return (
        <div>
          <br />
          <Grid container spacing={32}>
            {weatherData.data.map((item, i) => (
              <Grid item xs={4} key={i}>
                <div>
                  <Card align="middle" raised>
                    <CardContent>
                      <div>Name:{item.name}</div>
                      <p>
                        <img
                          src={item.profile_image}
                          className={classes.img}
                          alt=""
                        />
                      </p>
                    </CardContent>
                  </Card>
                  <br />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      )
    }
    case Status.FAILURE: {
      return <div>CAN NOT GET DATA!!!</div>
    }
    default: {
      throw new Error('unexpected status ' + weatherData.status)
    }
  }
}

Weather.propTypes = {
  status: PropTypes.string.isRequired
}

const mapStateTopProps = state => {
  const weatherData = state.weather
  //console.log('weatherData='+JSON.stringify(weatherData));
  return {
    weatherData,
    status: weatherData.status
  }
}

export default connect(mapStateTopProps)(withStyles(styles)(Weather))
