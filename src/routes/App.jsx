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
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
    </BrowserRouter>
  )
}

export default App
