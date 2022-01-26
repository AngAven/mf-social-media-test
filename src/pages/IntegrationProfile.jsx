import React, {useEffect, useState, useContext} from 'react'
import AppContext from '@context/AppContext'
import {Card, CardHeader, Container} from '@mui/material'
import {IconButton, makeStyles} from '@material-ui/core'
import {CardContent, Grid} from '@mui/material'
import CardProfilePicture from '@components/CardProfilePicture'
import CardBasicInfo from '@components/CardBasicInfo'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import InterestsIcon from '@mui/icons-material/Interests'
import Typography from '@mui/material/Typography'
import CardIntegration from '@components/CardIntegration'
import CardEducation from '@components/CardEducation'
import CardWork from '@components/CardWork'
import CardFollows from '@components/CardFollows'
import CardInterest from '../components/CardInterest'


const useStyles = makeStyles({
  profilecard: {
    margin: 20
  }
})


const IntegrationProfile = () => {
  const classes = useStyles()
  const {state} = useContext(AppContext)
  const {facebook, linkedin, twitter} = state

  const IconCards = [
    {
      text: 'Education',
      icon: <SchoolIcon color="primary" style={{fontSize: 30}}/>,
      comp: <CardEducation state={state}/>
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

  return (
    <Container>
      <Grid container spacing={4}>

        <Grid item xs={12} md={6} lg={6} >
          <CardProfilePicture/>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <div>
            <div>
              <CardBasicInfo/>
            </div>
          </div>
        </Grid>

        {
          IconCards.map(item => (
            <Grid item xs={12} md={4} lg={6} key={item.text}>
              <CardIntegration item={item}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default IntegrationProfile
