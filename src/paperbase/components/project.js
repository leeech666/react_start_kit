import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DoneIcon from '@material-ui/icons/Done'

const categories = [
  {
    id: '•	RESUME components:',
    children: [
      {
        id: 'Combining Material-ui tabs and React-routerV4;',
        icon: <DoneIcon />
      },
      {
        id:
          'Using this.props.history.location.pathname to synchronize tabs and routes;',
        icon: <DoneIcon />
      },
      { id: 'Using store to share one snackbar component;', icon: <DoneIcon /> }
    ]
  },
  {
    id: '•	HOC and Redux components:',
    children: [
      {
        id:
          'displaying data using the Custom Components, library Components, and Redux;',
        icon: <DoneIcon />
      },
      {
        id:
          'Implemented React container and presentational components (as Stateless and Functional components when applicable);',
        icon: <DoneIcon />
      },
      { id: 'Using localStorage to keep data;', icon: <DoneIcon /> }
    ]
  },

  {
    id: '•	Api and Async with Axios components:',
    children: [
      {
        id: 'interacting with APIs, Web Services by using Redux-thunk+Axios;',
        icon: <DoneIcon />
      }
    ]
  }
]

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: 'rgba(80,80,80,1)'
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16
  },

  itemActiveItem: {
    color: '#4fc3f7'
  },
  itemPrimary: {
    color: 'inherit',
    //color: 'black',
    //fontSize: theme.typography.fontSize,
    fontSize: '24',
    '&$textDense': {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  }
})

function Navigator(props) {
  const { classes } = props

  return (
    <div>
      <List disablePadding>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={(classes.categoryHeader, classes.item)}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem key={childId} className={classes.item}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <br />
          </React.Fragment>
        ))}
      </List>
    </div>
  )
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigator)
