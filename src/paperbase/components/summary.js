import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(80,80,80,1)',
    overflow: 'hidden',	
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 0,
    marginBottom: theme.spacing.unit * 8,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `10px`,
	padding: `100px`,
	color: 'rgba(255, 255, 255, 0.7)',
  },   
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  }, 
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <div className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />        
        <div>
          <Grid container spacing={8}>
           
            <Grid item >
              <div className={classes.item}>                
                <img
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h6" align="left" color='inherit'>
•	Hands on experience in creating components using React.js;<br/>

•	Understanding the web development process (design, develop, deploy);<br/>
•	Ability to work effectively while working as a team member as well as individually;<br/>
•	Extensive knowledge in developing single - page applications (SPAs);<br/>
•	Experience in RESTful web services to integrate between Server side to Client Side;<br/>
•	Worked on an Agile (Scrum) Development Team to deliver regular updates to business team and project managers;<br/>
•	Well versed with UI tools like VSCode, Atom, notepad++ for developing;<br/>
•	Relentless, self-motivated learning;<br/>
•	Programming Languages: @Material-ui/core3.9, React16.7, React-Redux6.0 , Redux4.0, React-routerV4, Redux-thunk+Axios,  Node.js/Express.js;<br/>
•	Databases:   MySQL, MongoDB;<br/>
•	OS: Windows, CentOS 7.3;<br/>
•	Other: Photoshop, AutoCAD, PHP/Laravel5.6 , Python/anaconda;<br/>
•	Basic knowledge of machine learning(Genetic Algorithm, RF, LSTM);<br/>

                </Typography>
              </div>
            </Grid>
           
          </Grid>
        </div>
        
      </div>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
