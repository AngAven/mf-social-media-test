import React, { useContext } from 'react'
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
import { display } from '@mui/system'
import InfoIcon from '@mui/icons-material/Info'
import CardAbout from '../components/CardAbout'

const useStyles = makeStyles({
  profilecard: {
    margin: 20
  }
})

const IntegrationProfile = () => {
  const classes = useStyles()
  const IconCards = [
    {
      id: 1,
      text: 'About',
      icon: <InfoIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardAbout />
    },
    {
      id: 2,
      text: 'Education',
      icon: <SchoolIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardEducation />
    },
    {
      id: 3,
      text: 'Work',
      icon: <WorkIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardWork />
    },
     {
       id: 4,
       text: 'Follows',
       icon: <ThumbUpAltIcon color="primary" style={{ fontSize: 30 }} />,
       comp: '<CardFollows />'
     },
    {
      id: 5,
      text: 'Interest',
      icon: <InterestsIcon color="primary" style={{ fontSize: 30 }} />,
      comp: <CardInterest />
    }
  ]

  return (
    <Container sx={{ mt: 5 }} >

      <Grid container spacing={4}>

        <Grid item xs={12} md={4} lg={4} >
          <CardProfilePicture />
        </Grid>

        <Grid item xs={12} md={8} lg={8}>
          <CardBasicInfo />
        </Grid>

        {
          IconCards.map(item => (
            <Grid item xs={12} md={4} lg={6} key={item.id}>
              <CardIntegration item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default IntegrationProfile
