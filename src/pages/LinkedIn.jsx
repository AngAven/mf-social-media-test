import React, { useEffect, useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardEducation from '@components/CardEducation'
import CardHeader from '../components/CardHeader'
import FormDialog from '@components/FormDialog'
import CardBasicInfo from '@components/CardBasicInfo'
import CardProfilePicture from '@components/CardProfilePicture'
import SocialButtonLinkAuth0 from '../components/SocialButtonLinkAuth0'
import CardAbout from '../components/CardAbout';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School'
import CardIntegration from '@components/CardIntegration'

export default function LinkedIn() {

  const { state } = useContext(AppContext)
  const { currentObject, linkedin } = state

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
    }
  ]

  /*   const [education, setEducation] = useState(currentObject.education);
  
    useEffect(() => {
      fetch('http://localhost:8000/data')
        .then(res => res.json())
        .then(data => setEducation(data))
    }, []) */


  const [selectedMode, setSelectedMode] = useState(false)

  if (Object.keys(linkedin).length === 0) {
    return (
      <SocialButtonLinkAuth0 props='LinkedIn' />
    )
  }
  return (
    <Container>

      <Grid container spacing={4}>

        <Grid item xs={12} md={12} lg={12} >
          <CardHeader setSelectedMode={setSelectedMode} />
        </Grid>

        <Grid item xs={12} md={4} lg={4} >
          <CardProfilePicture />
        </Grid>

        <Grid item xs={12} md={8} lg={8}>
          <CardBasicInfo selectedMode={selectedMode} />
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
