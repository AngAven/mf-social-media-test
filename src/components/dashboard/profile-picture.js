import React from 'react'
import {Card, CardContent, Grid} from '@mui/material'
import flag from '@icons/flag-col.svg'

export const ProfilePicture = (props) => (
  <Card
    {...props}
  >
    <CardContent>
      <figure className='figure-avatar'>
        <img alt="Profile Picture" src="/static/images/avatars/profilepicture.svg"/>
        <img src={flag} width={32} alt="Col" className="flag-position" />
      </figure>
    </CardContent>
  </Card>
)
