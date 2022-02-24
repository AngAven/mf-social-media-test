import React from 'react';
import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useAuth0 } from "@auth0/auth0-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'


async function handleConnection(socialName, userSub, login, getCurrentToken, getNewToken) {
    try {
        const accessToken = await getCurrentToken();
        await login({ connection: socialName });
        const targetUserIdToken = await getNewToken();
        const resp = await linkAccount(userSub, accessToken, targetUserIdToken.__raw);
        console.log(resp);
    } catch (err) {
        console.error(err);
    }
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


const SocialButtonLinkAuth0 = ({ props }) => {
    const socialname = props
    const { loginWithPopup, getAccessTokenSilently, getIdTokenClaims, user } = useAuth0();

    const TextToLowerCase = () => {
      return  socialname.toLowerCase();
    }

    const socialIcon = () => {
        switch (socialname) {
            case "Facebook": return <FacebookIcon />;
            case "LinkedIn": return <LinkedInIcon />;
            case "Twitter": return <TwitterIcon />;
        }
    }

    const socialColor = () => {
        switch (socialname) {
            case "Facebook": return '#3b5898';
            case "LinkedIn": return '#0e76a8';
            case "Twitter": return '#00acee';
        }
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            spacing={1.5}
            justifyContent="center"
            height="87vh"
        >
            <Typography color={"primary"} sx={{ fontSize: 20, padding: 2 }}>
                Conecta tu cuenta de:
            </Typography>
            <SocialButtonsStyle
                onClick={() => handleConnection(TextToLowerCase() , user.sub, loginWithPopup, getAccessTokenSilently, getIdTokenClaims)}
                sx={{
                    backgroundColor: socialColor(),
                    '&:hover': {
                        borderColor: socialColor(),
                        color: socialColor(),
                    },
                }} startIcon={socialIcon()}>
                {socialname ? socialname : ''}
            </SocialButtonsStyle>
        </Stack >
    );
};

export default SocialButtonLinkAuth0;