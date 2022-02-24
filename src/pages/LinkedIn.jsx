import React, { useEffect, useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardEducation from '@components/CardEducation_'
import CardHeader from '../components/CardHeader'
import FormDialog from '@components/FormDialog'
import CardBasicInfo from '@components/CardBasicInfo'
import CardProfilePicture from '@components/CardProfilePicture'

import SocialButtonLinkAuth0 from '../components/SocialButtonLinkAuth0'


export default function LinkedIn() {

  const { state } = useContext(AppContext)
  const { currentObject, linkedin } = state

  const [education, setEducation] = useState(currentObject.education);

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(data => setEducation(data))
  }, [])


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

        <Grid item xs={12} md={6} lg={6} >
          <CardProfilePicture />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <div>
            <div>
              <CardBasicInfo selectedMode={selectedMode} />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={6} >
          <Card sx={{ maxWidth: 345 }}>

          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>

          {/*<CardEducation/>*/}

          <div>
            <FormDialog></FormDialog>
          </div>
        </Grid>

      </Grid>
    </Container>
  )
}
