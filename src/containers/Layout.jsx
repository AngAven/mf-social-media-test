import React, {useContext} from 'react'
import AppContext from '@context/AppContext'
import Divider from '@mui/material/Divider'
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
import logo from '@logos/logo.svg'
import {Box} from '@mui/system'
import MenuIcons from '../components/MenuIcons'
import {useHistory} from 'react-router-dom'

const drawerWidth = 200

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      paddding: theme.spacing(3)
    },
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
      marginTop: 20,
      marginBottom: 20,
      padding: theme.spacing(2)
    },
    appbar: {
      borderBottom: `solid ${deepPurple[500]} 2px`,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
    toolbarTitle: {
      flexGrow: 1,
      color: purple[500],
    }
  }
})

const Layout = ({children}) => {
  const classes = useStyles()
  const {state} = useContext(AppContext)
  const {facebook, linkedin, twitter} = state
  console.log('state => ', facebook)
  const history = useHistory()
  const menuItems = [
    {
      text: 'Dashboard',
      icon: <WebIcon color="primary" style={{fontSize: 30}}/>,
      path: '/integration_profile',
    },
    {
      text: 'Facebook',
      icon: <FacebookIcon color="primary" style={{fontSize: 30}}/>,
      path: '/login',
    },
    {
      text: 'Twitter',
      icon: <TwitterIcon color="primary" style={{fontSize: 30}}/>,
      path: '/twitter',
    },
    {
      text: 'LinkedIn',
      icon: <LinkedInIcon color="primary" style={{fontSize: 30}}/>,
      path: '/linkedin',
    }
  ]

  return (
    <Box className={classes.root}>
      <AppBar
        style={{
          backgroundColor: 'white',
          width: state.isLogged ? `calc(100% - ${drawerWidth}px)` : '100%'
        }}
        className={classes.appbar}
        elevation={0}>
        <Toolbar>
          <img src={logo} alt="logo"/>
          {
            state.isLogged && (
              <>
                <Typography className={classes.toolbarTitle}>
                </Typography>
                <MenuIcons/>
                <Typography color="primary">{state.facebook.name}</Typography>
                <Avatar className={classes.avatar}/>
              </>

            )}
        </Toolbar>
      </AppBar>

      {
        state.isLogged && (
          <>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              anchor="left"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <Typography variant="h4" className={classes.editionTitle} color="primary">
                  Edition
                </Typography>
              </div>
              <Divider/>
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
                        primaryTypographyProps={{fontSize: '1.7rem'}}/>
                    </ListItem>
                  ))
                }
              </List>
            </Drawer>
          </>
        )
      }

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </Box>
  )
}
export default Layout
