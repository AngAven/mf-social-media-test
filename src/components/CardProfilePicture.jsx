import * as React from 'react';
import Card from '@mui/material/Card';
/* import flag from '@icons/flag-col.svg'; */
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";

export default function CardProfilePicture({ state }) {
    const { facebook, linkedin, twitter } = state
    const { user } = useAuth0();
    return (
        <>
            {facebook.name && (facebook.picture_large) ?
                <Card /* sx={{ maxWidth: 345 }} */>
                    <CardMedia
                        component="img"
                        image={facebook.picture_large ? facebook.picture_large : facebook.picture_large}
                        alt="Profile Picture"
                    />
                </Card >
                :
                user && (<Avatar
                    sx={{
                        bgcolor: "#555BFF",
                        height: 250, width: 250, fontSize: '100px'
                    }}>
                    {user.name[0].toUpperCase()} </Avatar>)

                /*  <img src={flag} width={32} alt="Col" position={'absolute'} />  */

            }
        </>

    );
}
