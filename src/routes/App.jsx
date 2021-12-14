import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from '../pages/Login'
import NotFound from '../containers/NotFound'
import Home from '../pages/Home'
import LoginWith from '../components/LoginWith'
import MainFeatures from '../pages/MainFeatures'
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
          <Route exact path="/main_features" component={MainFeatures}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
