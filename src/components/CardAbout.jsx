import React, { useEffect, useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import { Typography } from '@mui/material';

const CardAbout = () => {

    const { state } = useContext(AppContext)
    const { currentObject} = state
    return (
        <div>
            <Typography variant='h6'
            >{currentObject.about}</Typography>

        </div>
    );
};

export default CardAbout;