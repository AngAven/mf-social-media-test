import React from 'react'

import DashboardTwitter from '../components/DashboardTwitter'
import '../styles/pages/Dashboard.scss'

const DashBoard = () => {
  return (
    <div className={"dashboard"}>
      <div>
        Linkedin
      </div>
      <DashboardTwitter />
    </div>
  )
}

export default DashBoard
