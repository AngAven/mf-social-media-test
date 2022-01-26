import React from 'react'
import DashboardTwitter from '../components/DashboardTwitter'
import '../styles/pages/Dashboard.scss'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ProfileIcons from '/src/components/ProfileIcons';
import '/src/styles/pages/MainFeatures.scss'
import LateralMenu from '../components/LateralMenu.jsx'
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
    </div>
  )
}

export default DashBoard
