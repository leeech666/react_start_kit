import React from 'react'
import PropTypes from 'prop-types'
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Hidden from '@material-ui/core/Hidden'
import Navigator from './Navigator'
import Header1 from './Header1'
import Headerheader from './Headerheader'
import Home from '../onepirate/Home'
import SignIn from '../onepirate/SignIn'
import Instapaper from '../instapaper/pages/instapaper/Profile'
import { Route, Switch, Redirect } from 'react-router-dom'
import CommentApp from '../HOCandRedux/containers/CommentApp'
import { view as Selection } from '../city_selector'

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
    }
  },
  shape: {
    borderRadius: 8
  }
})

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'initial'
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0
        }
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48
    }
  }
}

const drawerWidth = 256
const drawerWidthSmall = 180

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 1,
    //padding: '48px 36px 0',
    background: '#eaeff1'
  }
}

class Paperbase extends React.Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }
  handleDrawerClose = () => {
    this.setState(state => ({ mobileOpen: false }))
  }
  render() {
    const { classes } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidthSmall } }}
                variant="temporary"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                onDrawerToggle={this.handleDrawerClose}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                onDrawerToggle={this.handleDrawerToggle}
              />
            </Hidden>
          </nav>
          <div className={classes.appContent}>
            <Headerheader onDrawerToggle={this.handleDrawerToggle} />

            <main className={classes.mainContent}>
              <Switch>
                <Route path="/hoc/" component={CommentApp} />
                <Route path="/resume" component={Header1} />
                <Route path="/async/" component={Selection} />
                <Route path="/home/" exact component={Home} />
                <Route path="/instapaper/" exact component={Instapaper} />
                <Route path="/signin/" component={SignIn} />
                <Redirect to="/resume/special" />
              </Switch>
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Paperbase)
