import React, { useEffect, useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import { Typography } from '@mui/material';

const CardAbout = () => {

    const { state } = useContext(AppContext)
    const { currentObject, dashBoardSelected} = state

    const profileAbout = () => {
        switch (dashBoardSelected) {
            case "dashboard": return  currentObject.about ;
            case "facebook": return " ";
            case "linkedin": return currentObject.localizedHeadline;
            case "twitter": return currentObject.description;
        }
    }

    return (
        <div>
            <Typography variant='h6' align='justify' padding={'1.5em'}
            >{profileAbout()}</Typography>
        </div>
    );
};

export default CardAbout;