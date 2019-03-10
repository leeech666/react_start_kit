import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class PositionedSnackbar extends React.Component {
	
   state = {
    open: true,
  };
	handleClose = () => {
        //this.setState({open: false});
		//this.setState({kai: false});
		
		this.setState({open:false});
		
    };
   
	

		
    render() {
		
		const { classes } = this.props;
        
        return (
            <div>
			<Button onClick={this.handleClick}>Open snackbar one</Button>
                <Snackbar
                    anchorOrigin={{vertical: 'bottom',
            horizontal: this.props.horizontal}}
                    open={this.state.open}
					autoHideDuration={this.props.seconds}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.msg}</span>}
					 action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
                />
            </div>
        );


    }
}




export default withStyles(styles)(PositionedSnackbar)
