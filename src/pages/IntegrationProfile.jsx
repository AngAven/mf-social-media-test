import React, { useEffect, useState, useContext } from 'react';
import AppContext from '@context/AppContext'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@mui/material';
import CardProfilePicture from '../components/CardProfilePicture';

const useStyles = makeStyles( {
    profilecard: {
     marginTop: 20
  }
})


const IntegrationProfile = () => {
  const classes = useStyles()
  /* const { fbData } = useContext(AppContext) */
  const [fbData, setfbData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/fb')
      .then(res => res.json())
      .then(data => setfbData(data))
  }, [])


  return (
    <Container>
      <Grid className={classes.profilecard} >
        <CardProfilePicture />
        <div>
          {fbData.map(data =>(
            <p key={data.id}> {data.firstname} </p>
          ))}
        </div>
      </Grid>
    </Container>
  )
}

export default IntegrationProfile
