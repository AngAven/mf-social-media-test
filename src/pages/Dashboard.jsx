import React from 'react'

import DashboardTwitter from '../components/DashboardTwitter'
import '../styles/pages/Dashboard.scss'
import ProfileLinkedIn from '../components/ProfileLinkedIn'

const DashBoard = () => {
  return (
    <div className={"dashboard"}>
      <div>
        <ProfileLinkedIn />
      </div>
      <DashboardTwitter />
    </div>
  )
}

export default DashBoard
