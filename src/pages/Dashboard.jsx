import React, {useState, useEffect} from 'react'
import axios from 'axios';
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
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { padding } from '@mui/system';

const API_Facebook = 'https://my.api.mockaroo.com/facebook.json?key=d48cf750'
const API_Linkedin = 'https://my.api.mockaroo.com/linked_in.json?key=d48cf750'

function handleClick() {
  history.push("/home");
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const DashBoard = () => {
  const [facebookData, setFacebookData] = useState({})
  const [linkedinData, setLinkedinData] = useState({})

  useEffect(async () => {
    const {data} = await axios.get(API_Facebook)
    console.log('Facebook', data)
    facebookData(data)
  }, [])

  useEffect(async () => {
    const {data} = await axios.get(API_Linkedin)
    console.log('LinkedIn', data)
    setLinkedinData(data)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          {/* <Item sx={{ height: ('100%') }}> */}
            <LateralMenu/>
         {/*  </Item> */}
        </Grid>

        <Grid item xs={7}>
          <h1 item xs={10} >Profile Dashboard</h1>
          <Item>
            <div className='MainProfile'>

              {<Grid container spacing={2} marginTop={3}>
                {<Grid>
                  <ProfilePicture />
                </Grid>}
                {/* <Grid> */}
                  {/* <Paper sx={{ width: 660 }}> */}
                    <Typography variant='h3' fontFamily={'var(--mulish)'}>
                      Alejandra Díaz Rojas
                    </Typography>
                    <ProfileIcons profileEmail={facebookData.email}/>
                 {/*  </Paper> */}
              {/*   </Grid> */}
              </Grid>}

            </div>
          </Item>
          <h1></h1>
          <Item>
            <Typography variant='h3' fontFamily={'var(--mulish)'}>
              Highlights Information
            </Typography>
          </Item>

        </Grid>
        <Grid item /* xs="auto" */ xs={3} sx={{ paddingTop: ('20px') }}  >
          <h1 className='h1Margin' ></h1>
          <Item >
            Twitter Info Tags
          </Item>
        </Grid>

      </Grid>
    </Box>
  )
}

export default DashBoard
