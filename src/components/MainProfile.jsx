import * as React from 'react';
import { styled } from '@mui/material/styles';
import ProfilePicture from '@components/ProfilePicture';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ProfileIcons from '/src/components/ProfileIcons';
import Box from '@mui/material/Box';
import '/src/styles/pages/MainFeatures.scss'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    position: 'relative'
}));

export default function MainProfile() {
    return (
        <Grid item xs marginTop={3}>
        <Typography variant="h1" marginLeft={18}>Profile Dashboard</Typography>
        <Grid container spacing={2} marginTop={3}>
        <Grid item sx={4}>
        <ProfilePicture />
        </Grid>

        <Grid item sx={4} >
            <Paper sx={{width:640}}>
                <Typography variant='h3' fontFamily={'var(--mulish)'}>
                    Alejandra Díaz Rojas
                </Typography>
                <ProfileIcons />
            </Paper>
        </Grid>
        </Grid>
        <Paper sx={{height:200, width:985,marginLeft:18,marginTop:4}}>
        <Typography variant='h3' fontFamily={'var(--mulish)'}>
                    Highlights Information
                </Typography>
        </Paper>

        </Grid>

    );
}

