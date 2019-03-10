import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import {BrowserRouter,withRouter,HashRouter, Route, Switch, Redirect,Link} from "react-router-dom"
import {actions as snackAction} from "../SnackBar/"
import {connect} from "react-redux";
import Project from "./components/project"
import Resume from "./components/resume";
import Summary from "./components/summary";
import Working from "./components/working.js";

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});
 

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={16} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser} onClick={()=>{props.onHandleClose(true,"under construction!",4000)}}>
                snackbar
              </Button>			  
			  
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
       
		<div>
		<Switch>
		
		<Route path='/resume'  exact component={Summary} />
		<Route path="/resume/project" component={Project}/>
        <Route path="/resume/experience" component={Working}/>
        <Route path="/resume/education" component={()=><h3>Bachelor degree, Xi'an Engineering University </h3>}/>
		<Route path="/resume/certificate" component={()=><h3>SAS advanced programmer Certificate</h3>}/>
		<Route path="/resume/special" component={()=><h3>SPECIAL</h3>}/>
		
		</Switch>	
		</div>
		
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapDispatchToProps=(dispatch)=>{
	return {
		onHandleClose:(open,msg,seconds)=>{
		dispatch(snackAction.snackbarChange(open,msg,seconds));
	}
	}
};
export default withRouter(connect(null,mapDispatchToProps)(withStyles(styles)(Content)));
//export default withRouter(withStyles(styles)(Content));