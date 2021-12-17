import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { indigo } from '@mui/material/colors';
import ld from '@icons/li-icon.svg';
import flag from '@icons/flag-col.svg';
import ProfileIcons from '/src/components/ProfileIcons';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
});

export default function ProfileLinkedIn() {
    return (
        <Paper sx={{ p: 2, margin: 5, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item >
                    <Avatar sx={{ bgcolor: indigo['A100'], width: 150, height: 150 }}>
                        <Typography variant='h1' >
                            A
                        </Typography>
                    </Avatar>
                    <Img src={flag} width={32} alt="Col" />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h3" component="div">
                                Alejandra Díaz Rojas
                            </Typography>
                            <Typography variant="body" gutterBottom>
                                Software Developer
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                About me
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                English Level : B2
                            </Typography>
                            <ProfileIcons />
                        </Grid>
                      
                    </Grid>
                    <Grid item>
                        <Img src={ld} />
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

