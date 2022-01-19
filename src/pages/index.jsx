/* import Head from 'next/head'; */
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Box, Container, Grid } from '@mui/material';
import { ProfilePicture} from '../components/dashboard/profile-picture';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { DashboardNavbar } from '../components/dashboard-navbar';
import { DashboardSidebar } from '../components/dashboard-sidebar';
import Header from '../components/Header/Header'
import { PersonalInfo } from '../components/dashboard/personal-info';
import { SocialSearch } from '../components/dashboard/social-search';

function handleClick() {
  history.push("/home");
}

const Dashboard = () => {
  const API_Facebook = 'https://my.api.mockaroo.com/facebook.json?key=f5fe39d0'
  const API_Linkedin = 'https://my.api.mockaroo.com/linked_in.json?key=d48cf750'
  const [facebookData, setFacebookData] = useState({})
  const [linkedinData, setLinkedinData] = useState({})

 useEffect(async () => {
   const {data} = await axios.get(API_Facebook)
   console.log('Facebook', data)
   setFacebookData(data)
 }, [])

//  useEffect(async () => {
//    const {data} = await axios.get(linkedinData)
//    console.log('LinkedIn', data)
//    setLinkedinData(data)
//  })

  return(
  <>
    {/*  <Head> */}
    <title>
      Dashboard | Material Kit
    </title>
   {/*  {/*    </Head> */}
   <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
 {/*   <DashboardNavbar /> */}
{/*    <DashboardSidebar /> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <ProfilePicture />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <PersonalInfo email={facebookData.email}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <SocialSearch sx={{ height: '100%' }} />
         {/*    <TasksProgress /> */}
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >

            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {<LatestOrders />}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  )
}


Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
