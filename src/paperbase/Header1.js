import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Content from './Content';
import {withRouter,HashRouter, Route, Switch, Redirect,Link} from "react-router-dom"
import Page1 from '../pages/page1';
import {actions as snackAction} from "../SnackBar/"
import {connect} from "react-redux";

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing.unit,
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ paddingLeft: 100 }}>
      {props.children}
    </Typography>
  );
}
class Header extends React.Component{
  
  
  handleChange = (event, value) => {
    
	this.props.history.push(value);
	//console.log('value='+value) ;
  };
  
  render(){
  const {classes} =this.props;
  const { value } = this.props;
  const  value1  = this.props.history.location.pathname;
  return (
    <React.Fragment>	    
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item xs>
              <Typography color="inherit" variant="h5">
                RESUME
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                Setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={this.props.history.location.pathname} textColor="inherit" onChange={this.handleChange}>
          <Tab textColor="inherit" label="Summary" 
		  value="/resume"/>		
		  <Tab
          label="Project "
          value="/resume/project"
        >
       
        </Tab>
        <Tab
          label="Experience "
          value="/resume/experience"
            >
		</Tab>
          <Tab textColor="inherit" 
		  label="Education" 
		  value="/resume/education" 
		  onClick={()=>{this.props.onHandleClose(true,"Bachelor Degree",1000)}}
		  />
          <Tab textColor="inherit" 
		  label="Certificate" 
		  value="/resume/certificate"
		  onClick={()=>{this.props.onHandleClose(true,"Advanced Programmer",1000)}}
		  />
          <Tab textColor="inherit" label="Special" 
		  value="/resume/special"/>
		 
        </Tabs>
		
      </AppBar>	    
	   {value1 === "/resume"&& <TabContainer><h2>Summary of Skills</h2></TabContainer>}		
	   {value1 === "/resume/experience" && <TabContainer><h2>Working Experience</h2></TabContainer>}
	   {value1=== "/resume/project" && <TabContainer><h2>Personal Project</h2></TabContainer>}
	   {value1 === "/resume/education" && <TabContainer><h2>Education</h2></TabContainer>}
	   {value1 === "/resume/certificate" && <TabContainer><h2>Certificate</h2></TabContainer>}
	   {value1 === "/resume/special" && <TabContainer><h2>Special</h2></TabContainer>}
	   <Content  />
	   
    </React.Fragment>
  );
}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  //onDrawerToggle: PropTypes.func.isRequired,
};
const mapDispatchToProps=(dispatch)=>{
	return {
		onHandleClose:(open,msg,seconds)=>{
		dispatch(snackAction.snackbarChange(open,msg,seconds));
	}
	}
};

export default withRouter(connect(null,mapDispatchToProps)(withStyles(styles)(Header)));