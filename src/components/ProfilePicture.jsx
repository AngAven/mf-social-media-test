import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import flag from '@icons/flag-col.svg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ProfilePicture() {
    return (
        <Grid style ={{justifyContent: "center", display: "flex" }} >
            <Avatar sx={{ bgcolor: deepPurple['300'], width: 150, height: 150}}>
                <Typography variant='h1' >
                    A
                </Typography>
            </Avatar>
            <Grid paddingTop={'120px'} >
            <img src={flag} width={32} alt="Col" position={'absolute'} />
            </Grid>
            
        </Grid>
    )
};