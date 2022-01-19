/* import Head from 'next/head'; */
import React from 'react'
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

const Dashboard = () => (

  
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
            <PersonalInfo />
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
);


Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
