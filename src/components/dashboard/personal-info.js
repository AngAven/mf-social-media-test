import React from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ProfileIcons from '/src/components/ProfileIcons';

export const PersonalInfo = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography variant='h3' fontFamily={'var(--mulish)'}>
            Alejandra Díaz Rojas
          </Typography>
          <ProfileIcons email={props.email}/>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
