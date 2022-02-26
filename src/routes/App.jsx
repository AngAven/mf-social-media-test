import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import {createTheme} from '@mui/material'
import Layout from '@containers/Layout'
import Login from '@pages/Login'
import ConnectSocial from '@containers/ConnectSocial'
import MainFeatures from '@pages/MainFeatures'
import IntegrationProfile from '@pages/IntegrationProfile'
import DashBoard from '@pages/Dashboard'
import TwitterBoard from '@pages/TwitterBoard'
import FacebookBoard from '@pages/FacebookBoard'
import LinkedIn from '@pages/LinkedIn'
import NotFound from '@containers/NotFound'

import '@styles/global.css'
import {ThemeProvider} from '@emotion/react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#555BFF',
    },
    secondary: {
      main: '#35589A',
    },
  },
  typography: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
})

import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const initialState = useInitialState();
  const { loginWithRedirect } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={initialState}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/connect-social" component={ConnectSocial}/>
              <Route exact path="/main_features" component={MainFeatures}/>
              <Route exact path="/dashboard" component={IntegrationProfile}/>
              <Route exact path="/twitter" component={TwitterBoard}/>
              <Route exact path="/linkedin" component={LinkedIn} />
              <Route exact path="/facebook" component={FacebookBoard} />
              <Route exact path="/authLinkedin" component={() => {
                loginWithRedirect({connection: 'linkedin'});
                return null
              }}/>
              <Route exact path="/authFacebook" component={() => {
                loginWithRedirect({connection: 'facebook'});
                return null
              }}/>
              <Route exact path="/authTwitter" component={() => {
                loginWithRedirect({connection: 'twitter'});
                return null
              }}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </Layout>
        </Router>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App
