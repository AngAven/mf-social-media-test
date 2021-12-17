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
import InputLabel from '@mui/material/InputLabel';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
});

const fullname =  "Full Name";

export default function ProfileLinkedIn() {
    return (
        <Paper sx={{ p: 2, margin: 5, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item >
                    <Avatar sx={{ bgcolor: indigo['A100'], width: 150, height: 150 }}>
                        <Typography variant='h1' >
                            M
                        </Typography>
                    </Avatar>
                    <Img src={flag} width={32} alt="Col" />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h3" component="div">
                            <InputLabel variant="filled" >{fullname}</InputLabel>
                                Full Name
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Job title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ID: 1030114
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Remove
                            </Typography>
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

