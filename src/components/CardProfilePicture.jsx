import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import Card from '@mui/material/Card';
/* import flag from '@icons/flag-col.svg'; */
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";
import { CardContent } from '@mui/material';

export default function CardProfilePicture() {
    const { user } = useAuth0();
    const { state } = useContext(AppContext)
    const { currentObject, dashBoardSelected } = state

    const profilePicture = () => {
        switch (dashBoardSelected) {
            case "dashboard": return  currentObject.picture ;
            case "facebook": return currentObject.picture_large;
            case "linkedin": return currentObject.profilePicture;
            case "twitter": return currentObject.profile_image_url;
        }
    }

    console.log(profilePicture())

    return (
        <>
            {/*   {currentObject.name && (currentObject.picture_large) ? */}

            {
                profilePicture() ?
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            image={profilePicture()}
                            alt="Profile Picture"
                        />
                    </Card >
                    :
                    user && (
                        <CardContent style={{ justifyContent: 'center' }}>
                            <Avatar
                                sx={{
                                    bgcolor: "#555BFF",
                                    height: 250, width: 250, fontSize: '100px'
                                }}>
                                {user.name[0].toUpperCase()} </Avatar>

                        </CardContent>
                        /* <img src={flag} width={32} alt="Col" position={'absolute'} />   */
                    )

            }

        </>

    );
}
