import React, { useContext, useState } from 'react'
import AppContext from '@context/AppContext'
import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@mui/material'
import CardProfilePicture from '@components/CardProfilePicture'
import CardBasicInfo from '@components/CardBasicInfo'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import InterestsIcon from '@mui/icons-material/Interests'
import CardIntegration from '@components/CardIntegration'
import CardEducation from '@components/CardEducation'
import CardWork from '@components/CardWork'
import CardFollows from '@components/CardFollows'
import CardInterest from '../components/CardInterest'
import CardHeader from '../components/CardHeader'
import { useAuth0 } from '@auth0/auth0-react'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Button } from '@mui/material'

import linkAccount from '../services/link-accounts';


const useStyles = makeStyles({
  profilecard: {
    margin: 20
  }
})

async function handleConnection(socialName, userSub, login, getCurrentToken, getNewToken) {
  try {
    const accessToken = await getCurrentToken();
    await login({ connection: socialName });
    const targetUserIdToken = await getNewToken();
    const resp = await linkAccount(userSub, accessToken, targetUserIdToken.__raw);
    console.log(resp);
  } catch (err) {
    console.error(err);
  }

}

const TwitterBoard = () => {
  const classes = useStyles()
  const { state } = useContext(AppContext)
  const { twitter } = state

  const { loginWithPopup, getAccessTokenSilently, getIdTokenClaims, user } = useAuth0();

  const IconCards = [
    {
      text: 'Education',
      icon: <SchoolIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardEducation state={state} />
    },
    {
      text: 'Work',
      icon: <WorkIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardWork />
    },
    {
      text: 'Follows',
      icon: <ThumbUpAltIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardFollows />
    },
    {
      text: 'Interest',
      icon: <InterestsIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardInterest />
    }
  ]

  const [selectedMode, setSelectedMode] = useState(false)



  if (Object.keys(twitter).length === 0) {
    return (
      <Container>

        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12} mt={'10px'} >
            <Button
              variant="contained"
              startIcon={<TwitterIcon />}
              onClick={() => handleConnection('twitter', user.sub, loginWithPopup, getAccessTokenSilently, getIdTokenClaims)}
            >
              Conecta tu cuenta de Twitter
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  } else {
    return (
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12} >
            <CardHeader setSelectedMode={setSelectedMode} />
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
            {/*<CardProfilePicture/>*/}
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div>
              <div>
                <CardBasicInfo selectedMode={selectedMode} />
              </div>
            </div>
          </Grid>

          {
            IconCards.map(item => (
              <Grid item xs={12} md={4} lg={6} key={item.text}>
                <CardIntegration item={item} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    )
  }
}

export default TwitterBoard
