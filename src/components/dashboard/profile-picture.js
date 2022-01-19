import React from 'react'
import { Card, CardContent, Grid } from '@mui/material';
import flag from '@icons/flag-col.svg';

export const ProfilePicture = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}       
      >
          <img
            alt="Profile Picture"
            src="/static/images/avatars/profilepicture.svg"
          ></img>
           <Grid paddingTop={'250px'} >
            <img src={flag} width={32} alt="Col" position={'absolute'} />
            </Grid>

      </Grid>

    </CardContent>
  </Card>
);
