import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'

import {IOSSwitch} from './SwitchRadioButton'

const bull = (
  <Box
    component="span"
    sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    Social Network Name
  </Box>
)

export default function BasicCard({social_image, social_name}){
  return (
    <Card sx={{ display: 'grid', justifyContent: 'center' }}>
      <CardContent>
        <img src={social_image} alt="social-logo" className={"card-social-connect"}/>
        <Typography sx={{fontSize: "2rem", textAlign: "center", padding: "1rem" }} color="text.secondary" gutterBottom>
          {social_name}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1} alignItems="center">
        <IOSSwitch sx={{m: 3}} defaultChecked inputProps={{'aria-label': 'ant design'}}/>
        <Typography>Sync</Typography>
      </Stack>
    </Card>
  )
}
