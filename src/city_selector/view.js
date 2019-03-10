import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {view as Weather} from '../weather/'
import {actions as weatherActions} from '../weather/';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
//import store from '../Store'



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
	minHeight:400,
	
  },
});

class CitySelector extends React.Component {
  constructor() {
    super(...arguments);

    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const cityCode = ev.target.value;
    this.props.onSelectCity(cityCode)
  }
  
  
  
  handleClick=()=> {
	this.props.onSelectCity();
    // store.dispatch(weatherActions.fetchWeather('12312'));
  }
  render() {
	 const { classes } = this.props; 
    return (
	<div >
	<Paper className={classes.root} elevation={3}>
	 <Button  variant="outlined" color="primary" onClick={this.handleClick}>get async data</Button>
	 
	 <Weather />
	  
	  </Paper>
	  </div>
    );
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCity: (cityCode) => {
      dispatch(weatherActions.fetchWeather(cityCode));
    }
  }
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(CitySelector));

