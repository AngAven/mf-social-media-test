import * as React from 'react';
import Card from '@mui/material/Card';
/* import flag from '@icons/flag-col.svg'; */
import CardMedia from '@mui/material/CardMedia';

export default function CardProfilePicture({ state }) {
    const { facebook, linkedin, twitter } = state
    return (
        <Card sx={{ maxWidth: 345, mx: '17%'}}>
            {
                <CardMedia
                    component="img"
                    minHeight="100%"
                    image={facebook.picture_large}
                    alt="Profile Picture"

                />
            }
            {/*  <img src={flag} width={32} alt="Col" position={'absolute'} /> */}
        </Card>

    );
}
