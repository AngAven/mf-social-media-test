import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from '../pages/Login'
import NotFound from '../containers/NotFound'
import Home from '../pages/Home'
import ConnectSocial from '../containers/ConnectSocial'
import '../styles/global.css'
import Layout from '../containers/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/login_with" component={LoginWith}/>
          <Route component={NotFound}/>
          <Route exact path="/connect-social" component={ConnectSocial}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
