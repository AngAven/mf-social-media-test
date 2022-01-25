import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@material-ui/core';

export default function CardProfilePicture() {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image="/static/images/avatars/avatar_1.png"
                alt="Profile Picture"
            />
        </Card>

    );
}
