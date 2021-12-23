import React from 'react'

import DashboardTwitter from '../components/DashboardTwitter'
import '../styles/pages/Dashboard.scss'
import ProfileLinkedIn from '../components/ProfileLinkedIn'
import Header from '../components/Header/Header'

function handleClick() {
  history.push("/home");
}

const DashBoard = () => {
  return (
    <div>
      <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
      <div className={"dashboard"}>

        <div>
          <ProfileLinkedIn />
        </div>
        <DashboardTwitter />
      </div>
    </div>
  )
}

export default DashBoard
