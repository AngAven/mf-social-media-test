import * as React from 'react';
import AppContext from '@context/AppContext'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useContext} from 'react'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const {state, addSocialData} = useContext(AppContext)

  const handleClick = () => {
    console.log('entro')
    addSocialData({'test': 'test'}, 'facebook')
  }


  return (
    <>
      <button onClick={() => handleClick()}>
        hola
      </button>

    </>

  );
}
