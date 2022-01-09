import React from 'react'

import DashboardTwitter from '../components/DashboardTwitter'
import '../styles/pages/Dashboard.scss'
import MainProfile from '../components/MainProfile'
import Header from '../components/Header/Header'
import Lateral from '../components/LateralMenu.jsx'

function handleClick() {
  history.push("/home");
}

const DashBoard = () => {
  return (
    <div>

      <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
      <Lateral></Lateral>
      <div className={"dashboard"}>

       <div>
          <MainProfile />
        </div>
        <div>
        <DashboardTwitter />
        </div>

    </div>
    </div>
  )
}

export default DashBoard
