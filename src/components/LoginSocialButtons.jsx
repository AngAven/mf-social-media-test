import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Icon } from '@mui/material'
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

export default function LoginSocialButtons() {
  const { state, authSelection } = useContext(AppContext)
  const { socialNetworks } = state

  // Select which social media dashboard to show by default
  const loginAuthSelection = (e) => {
    authSelection(socialNetworks.filter(network => network === e.target.name)[0])
  }

  const SocialButtonsStyle = styled(Button)({
    fontSize: 20,
    height: 50,
    width: 300,
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: 6,
    '&:hover': {
      border: '3px solid',
    },
  })

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={1.5}
      justifyContent="center"
      height="87vh"
    >
      <Typography sx={{ color: '#Ae4EFF', fontSize: 22, padding: 2 }}>
        Login with:
      </Typography>
      <Link
        to="/authFacebook"
        style={{ textDecoration: 'none' }}>
        <SocialButtonsStyle
          name="facebook"
          onClick={loginAuthSelection}
          sx={{
            backgroundColor: '#3b5998',
            '&:hover': {
              borderColor: '#3b5998',
              color: '#3b5998',
            },
          }} startIcon={<FacebookIcon />}>
          Facebook
        </SocialButtonsStyle>
      </Link>
      <Link
        to="/authTwitter"
        style={{ textDecoration: 'none' }}>
        <SocialButtonsStyle
          name="twitter"
          onClick={loginAuthSelection}
          sx={{
            backgroundColor: '#00acee',
            '&:hover': {
              borderColor: '#00acee',
              color: '#00acee',
            },
          }} startIcon={<TwitterIcon />}>
          Twitter
        </SocialButtonsStyle>
      </Link>
      <Link
        to="/authLinkedin"
        style={{ textDecoration: 'none' }}>
        <SocialButtonsStyle
          name="linkedin"
          /* onClick={() => alert('Selected')} */
          onClick={loginAuthSelection}
          sx={{
            backgroundColor: '#0e76a8',
            '&:hover': {
              borderColor: '#0e76a8',
              color: '#0e76a8',
            },
          }}
          startIcon={<LinkedInIcon />}>
          LinkedIn
        </SocialButtonsStyle>
      </Link>
    </Stack>

  )
};
