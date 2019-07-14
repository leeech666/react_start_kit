import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { actions as snackAction } from '../SnackBar/'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
})

class PositionedSnackbar extends React.Component {
  handleClose = () => {
    this.props.onHandleClose(false, 'bye', 2000)
  }

  render() {
    console.log('snackbar:' + this.props.snackbar.seconds)
    const { vertical, horizontal, open, msg, seconds } = this.props.snackbar
    //console.log('open:'+this.state.open);
    const { classes } = this.props

    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={seconds}
          onClose={this.handleClose.bind(this)}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{msg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    snackbar: store.snackbar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onHandleClose: (open, msg, seconds) => {
      dispatch(snackAction.snackbarChange(open, msg, seconds))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PositionedSnackbar))
