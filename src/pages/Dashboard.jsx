import React from 'react'
import DashboardTwitter from '../components/DashboardTwitter'
import '../styles/pages/Dashboard.scss'
import Header from '../components/Header/Header'
import ProfilePicture from '@components/ProfilePicture';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ProfileIcons from '/src/components/ProfileIcons';
import '/src/styles/pages/MainFeatures.scss'
import LateralMenu from '../components/LateralMenu.jsx'

function handleClick() {
  history.push("/home");
}

const DashBoard = () => {
  return (
    <div>
      <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
      <div className="dashboard">
      <LateralMenu></LateralMenu>
        <div className='MainProfile'>
          <h1>Profile Dashboard</h1>
          <Grid container spacing={2} marginTop={3}>
            <Grid>
              <ProfilePicture />
            </Grid>
            <Grid>
              <Paper sx={{width:660}}>
                  <Typography variant='h3' fontFamily={'var(--mulish)'}>
                    Alejandra Díaz Rojas
                  </Typography>
                  <ProfileIcons />
              </Paper>
            </Grid>
          </Grid>
          <Paper sx={{height:200, width:970,marginTop:4}}>
            <Typography variant='h3' fontFamily={'var(--mulish)'}>
                    Highlights Information
            </Typography>
          </Paper>
        </div>
      /<DashboardTwitter></DashboardTwitter>
      </div>
    </div>
  )
}

export default DashBoard
