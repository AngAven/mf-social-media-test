import React from 'react';
import Avatar from '@mui/material/Avatar';
import { indigo } from '@mui/material/colors';
import flag from '@icons/flag-col.svg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ProfilePicture() {
    return (
        <Grid style ={{justifyContent: "left", display: "flex" }} >
            <Avatar sx={{ bgcolor: indigo['A100'], width: 280, height: 280}}>
                <Typography variant='h1' >
                    A
                </Typography>
            </Avatar>
            <Grid paddingTop={'250px'} >
            <img src={flag} width={32} alt="Col" position={'absolute'} />
            </Grid>

        </Grid>
    )
};
