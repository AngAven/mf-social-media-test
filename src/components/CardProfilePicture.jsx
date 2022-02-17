import React from 'react'
import AppContext from '@context/AppContext'
import {useContext} from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

export default function CardProfilePicture(){
  const {state} = useContext(AppContext)
  const {currentNetworkObjectSelected} = state

  return (<Card sx={{maxWidth: 345, mx: '17%'}}>
      {
        Object.keys(currentNetworkObjectSelected).length > 0 &&
        (<CardMedia
          component="img"
          image={currentNetworkObjectSelected.picture_large}
          alt="Profile Picture"
        />)}
    </Card>

  )
}
