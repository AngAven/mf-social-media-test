import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {IOSSwitch} from './SwitchRadioButton'
import '../styles/_vars.scss'

export default function BasicCard({social_image, social_name}){
  return (
    <Card sx={{ display: 'grid', justifyContent: 'center' }}>
      <CardContent>
        <img src={social_image} alt="social-logo" className={"card-social-connect"}/>
        <Typography sx={{fontFamily:"var(--mulish)", fontSize: "2rem", textAlign: "center", padding: "1rem" }} color="text.secondary" gutterBottom>
          Sync your profile with {social_name}, and get your profile information.
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1} alignItems="center">
        <IOSSwitch sx={{m: 3}} defaultChecked inputProps={{'aria-label': 'ant design'}}/>
        <Typography sx={{fontFamily:"var(--mulish)",fontSize:"1.8rem",fontWeight:"bold"}} color="text.secondary" >Sync</Typography>
      </Stack>
    </Card>
  )
}
