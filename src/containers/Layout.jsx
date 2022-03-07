import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '@context/AppContext'
import Divider from '@mui/material/Divider'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WebIcon from '@mui/icons-material/Web'
import {ListItemIcon} from '@material-ui/core'
import {deepPurple, purple} from '@material-ui/core/colors'
import MuiDrawer from '@material-ui/core/Drawer'
import {makeStyles} from '@material-ui/core'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import logo from '@logos/logo.svg'
import {Box} from '@mui/system'
import {IconButton} from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {useHistory} from 'react-router-dom'
import {styled, useTheme} from '@mui/material/styles'
import MenuIcons from '@components/MenuIcons'
import AccountMenu from '../components/AccountMenu'

const drawerWidth = 200

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)

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
  const {state, authSelection} = useContext(AppContext)
  const {isAuthenticated} = state
  const theme = useTheme()
  const history = useHistory();
  const [open, setOpen] = React.useState(false)

  window.onload = () => history.push('/dashboard')

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <WebIcon color="primary" style={{fontSize: 30}}/>,
      path: '/dashboard',
      name: 'dashboard',
    },
    {
      text: 'Facebook',
      icon: <FacebookIcon color="primary" style={{fontSize: 30}}/>,
      path: '/facebook',
      name: 'facebook',
    },
    {
      text: 'Twitter',
      icon: <TwitterIcon color="primary" style={{fontSize: 30}}/>,
      path: '/twitter',
      name: 'twitter',
    },
    {
      text: 'LinkedIn',
      icon: <LinkedInIcon color="primary" style={{fontSize: 30}}/>,
      path: '/linkedin',
      name: 'linkedin',
    }
  ]

  return (
    <Box className={classes.root} sx={{display: 'flex'}}>
      <AppBar
        open={open}
        style={{
          backgroundColor: 'white',
          //width: state.isLogged ? `calc(100% - ${drawerWidth}px)` : '100%'
        }}
        className={classes.appbar}
        elevation={0}>
        <Toolbar>
          {
            isAuthenticated && (
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: '3px',
                  ...(open && {display: 'none'}),
                }}
              >
                <MenuOpenIcon style={{fontSize: 40}}/>
              </IconButton>)
          }
          <img src={logo} alt="logo"/>
          {
            isAuthenticated && (
              <>

                <Typography className={classes.toolbarTitle}>
                </Typography>
                <MenuIcons/>
                <AccountMenu state={state}/>
                {/*   <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button> */}
              </>

            )}
        </Toolbar>
      </AppBar>

      {
        isAuthenticated && (
          <>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              open={open}
              anchor="left"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose} color="primary">
                  {theme.direction === 'rtl' ? <ChevronRightIcon/> : <Menu style={{fontSize: 40}}/>}
                </IconButton>
              </DrawerHeader>
              <div>
                {/* <Typography variant="h4" className={classes.editionTitle} color="primary">
                  Edition
                </Typography> */}
              </div>
              <Divider/>
              <List>
                {
                  menuItems.map(item => (
                    <ListItem
                      button
                      onClick={() => authSelection(item.name)}
                      key={item.text}
                      component={Link} to={item.path}
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
        <div className={classes.toolbar}/>
        {children}
      </div>
    </Box>
  )
}

export default Layout
