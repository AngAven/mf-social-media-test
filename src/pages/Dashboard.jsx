import React from 'react'
import '../styles/pages/Dashboard.scss'
import '/src/styles/pages/MainFeatures.scss'
import { useAuth0 } from '@auth0/auth0-react';

function handleClick() {
  history.push("/home");
}

const DashBoard = () => {
  const { user, isLoading } = useAuth0();

  console.log(user);
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <p>{user.name}</p>
    </div>
  )
}

export default DashBoard
