import React, { useEffect, useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import { Container } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useAuth0, User } from "@auth0/auth0-react";
import Typography from '@mui/material/Typography';
import CardEducation from '@components/CardEducation_'
import CardHeader from '../components/CardHeader'
import FormDialog from '@components/FormDialog'
import CardBasicInfo from '@components/CardBasicInfo'
import CardProfilePicture from '@components/CardProfilePicture'

const useStyles = makeStyles({
  profilecard: {
    margin: 20
  }
})

export default function LinkedIn() {

  const {state} = useContext(AppContext)
  const {currentObject} = state

  const [education, setEducation] = useState(currentObject.education);


  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(data => setEducation(data))
  }, [])

 
  const [selectedMode, setSelectedMode] = useState(false)

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

          <CardEducation/>

          <div>
            <FormDialog></FormDialog>
          </div>
        </Grid>

      </Grid>
    </Container>
  )
}
