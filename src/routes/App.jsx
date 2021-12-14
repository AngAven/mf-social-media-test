import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom'

import Login from '../pages/Login'
import NotFound from '../containers/NotFound'
import '../styles/global.css'

const App = () => {
  return (
    <Login />
  )
}

export default App
