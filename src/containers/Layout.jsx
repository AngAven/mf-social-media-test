import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WebIcon from '@mui/icons-material/Web'
import {ListItemIcon} from '@material-ui/core'
import {deepPurple, purple} from '@material-ui/core/colors'
import {Drawer} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const drawerWidth = 200

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      backgroundColor: '#f4f4f4',
    },
    editionTitle: {
      padding: theme.spacing(2),
      color: purple[300],
    },
    appbar: {
      borderBottom: `solid ${deepPurple[500]} 2px`,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
    listIcon: {
      fontSize: 20,
    },
    toolbarText: {
      color: purple[500],
    },
    toolbarTitle: {
      flexGrow: 1,
      color: purple[500],
    }
  }
})

const Layout = ({children}) => {
  const classes = useStyles()
  const menuItems = [
    {
      text: 'Dashboard',
      icon: <WebIcon color="primary" style={{fontSize: 30}} />,
      path: '/facebook',
    },
    {
      text: 'Facebook',
      icon: <FacebookIcon color="primary" style={{fontSize: 30}} />,
      path: '/facebook',
    },
    {
      text: 'Twitter',
      icon: <TwitterIcon color="primary" style={{fontSize: 30}} />,
      path: '/twitter',
    },
    {
      text: 'LinkedIn',
      icon: <LinkedInIcon color="primary" style={{fontSize: 30}} />,
      path: '/linkedin',
    }
  ]

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundColor: 'white',
          width: `calc(100% - ${drawerWidth}px)`,
      }}
        className={classes.appbar}
        elevation={0}>
        <Toolbar>
          <Typography className={classes.toolbarTitle}>
            Gethired
          </Typography>
          <Typography className={classes.toolbarText}>Alejandra</Typography>
          <Avatar className={classes.avatar} src="/mario-av.png"/>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <Typography variant="h3" className={classes.editionTitle}>
            Edition
          </Typography>
        </div>

        <List>
          {
            menuItems.map(item => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  history.push(item.path)
                }}
                className={location.pathname === item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{fontSize: '1.8rem'}}/>
              </ListItem>
            ))
          }
        </List>
      </Drawer>

      <div>
        {children}
      </div>
    </div>
  )
}
export default Layout
