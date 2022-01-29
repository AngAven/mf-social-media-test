import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import {createTheme} from '@mui/material'

import Layout from '@containers/Layout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import ConnectSocial from '@containers/ConnectSocial'
import MainFeatures from '@pages/MainFeatures'
import IntegrationProfile from '@pages/IntegrationProfile'
import DashBoard from '@pages/Dashboard'
import TwitterBoard from '@pages/TwitterBoard'
import NotFound from '@containers/NotFound'

import '@styles/global.css'
import {ThemeProvider} from '@emotion/react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#555BFF',
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

function getToken() {
  const { getAccessTokenSilently } = useAuth0();
  getAccessTokenSilently()
  .then((token) => {
    console.log(token);
  })
  .catch(error => console.log(error));

}

const App = () => {
  const initialState = useInitialState();
  const { loginWithRedirect, user } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={initialState}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/connect-social" component={ConnectSocial}/>
              <Route exact path="/main_features" component={MainFeatures}/>
              <Route exact path="/integration_profile" component={IntegrationProfile}/>
              <Route exact path="/dashboard" component={DashBoard}/>
              <Route exact path="/twitter" component={TwitterBoard}/>
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
