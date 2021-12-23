import * as React from 'react';
import { styled } from '@mui/material/styles';
import ProfilePicture from '@components/ProfilePicture';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ld from '@icons/li-icon.svg';
import ProfileIcons from '/src/components/ProfileIcons';
import Box from '@mui/material/Box';
import '/src/styles/pages/MainFeatures.scss'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    position: 'relative'
}));

export default function ProfileLinkedIn() {
    return (
        <Paper sx={{ p: 2, margin: 5, spacing: 2 }}>
            <Grid display={'flex'} justifyContent={'end'} paddingBottom={'20px'} >
                <img src={ld} alt="logo" width={'60px'} />
            </Grid>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={1}>

                    <Grid item xs>
                        <ProfilePicture />
                    </Grid>
                    <Grid item xs={6}>

                        <Grid item xs  >
                            <Typography variant='h3' fontFamily={'var(--mulish)'}>
                                Alejandra Díaz Rojas
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Software Developer
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                About me
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                English Level : B2
                            </Typography>

                        </Grid>

                    </Grid>
                    <Grid item xs>
                        <ProfileIcons />
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    );
}

