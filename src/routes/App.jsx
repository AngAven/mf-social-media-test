import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import NotFound from '../containers/NotFound'
import Home from '../pages/Home'
import ConnectSocial from '../containers/ConnectSocial'
import MainFeatures from '../pages/MainFeatures'
import IntegrationProfile from '../pages/IntegrationProfile'
import '../styles/global.css'
import Layout from '../containers/Layout'
import DashBoard from '../pages/Dashboard'


const App = () => {
  return (
    <BrowserRouter>      
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/connect-social" component={ConnectSocial} />
            <Route exact path="/main_features" component={MainFeatures} />
            <Route exact path="/integration_profile" component={IntegrationProfile} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/authLinkedin" component={() => {
              window.location.href = "https://ms-social-media.vercel.app/api/v1/loginLinkedin";
              return null;
            }}/>
            <Route exact path="/authFacebook" component={() => {
              window.location.href = "https://ms-social-media.vercel.app/api/v1/loginFacebook";
              return null;
            }}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
    </BrowserRouter>
  )
}

export default App
