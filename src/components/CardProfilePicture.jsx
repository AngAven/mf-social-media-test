import * as React from 'react';
import Card from '@mui/material/Card';
/* import flag from '@icons/flag-col.svg'; */
import CardMedia from '@mui/material/CardMedia';

export default function CardProfilePicture() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="100%"
                image="/static/images/avatars/avatar_1.png"
                alt="Profile Picture"
            />
            {/*  <img src={flag} width={32} alt="Col" position={'absolute'} /> */}
        </Card>

    );
}
