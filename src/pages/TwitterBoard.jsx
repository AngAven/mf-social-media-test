import React, { useContext,useState } from 'react'
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
import SocialButtonLinkAuth0 from '../components/SocialButtonLinkAuth0'
import InfoIcon from '@mui/icons-material/Info'
import CardAbout from '../components/CardAbout'



const useStyles = makeStyles({
  profilecard: {
    margin: 20
  }
})

const TwitterBoard = () => {
  const classes = useStyles()
  const {state} = useContext(AppContext)
  const {twitter} = state

  const IconCards = [
    {
      text: 'About',
      icon: <InfoIcon color="primary" style={{fontSize: 30}}/>,
      comp: <CardAbout state={state}/>
    },
    {
      text: 'Work',
      icon: <WorkIcon color="primary" style={{fontSize: 30}}/>,
      comp: <CardWork/>
    },
    {
      text: 'Follows',
      icon: <ThumbUpAltIcon color="primary" style={{fontSize: 30}}/>,
      comp: <CardFollows/>
    },
    {
      text: 'Interest',
      icon: <InterestsIcon color="primary" style={{fontSize: 30}}/>,
      comp: <CardInterest/>
    }
  ]

  const [selectedMode,setSelectedMode] = useState(false)

  if(Object.keys(twitter).length === 0) {
    return (
      <SocialButtonLinkAuth0 props='Twitter' />
    )
  } else {
    return (
      <Container>
        <Grid container spacing={4}>
        <Grid item xs ={12} md={12} lg={12} >
            <CardHeader setSelectedMode={setSelectedMode} />
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
            <CardProfilePicture/>
          </Grid>
  
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <div>
                <CardBasicInfo  selectedMode={selectedMode} />
              </div>
            </div>
          </Grid>
  
          {
           /*  IconCards.map(item => (
              <Grid item xs={12} md={4} lg={6} key={item.text}>
                <CardIntegration item={item} />
              </Grid>
            )) */
          }
        </Grid>
      </Container>
    )
  }
}

export default TwitterBoard
