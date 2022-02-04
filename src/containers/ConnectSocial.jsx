import React from 'react'
import { Container } from '@mui/material'
import CardConnectSocial from '../components/CardConnectSocial'
import '../styles/containers/ConnectSocial.scss'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import linkAccount from '../services/link-accounts';

function handleClick() {
  history.push("/home");
}

async function handleConnection(socialName, userSub, login, getCurrentToken, getNewToken) {
  try {
    const accessToken = await getCurrentToken();
    await login({connection: socialName});
    const targetUserIdToken = await getNewToken();
    const resp = await linkAccount(userSub, accessToken, targetUserIdToken.__raw);
    console.log(resp);
  } catch(err) {
    console.error(err);
  }
  
}

const ConnectSocial = () => {
  const { loginWithPopup, getAccessTokenSilently, getIdTokenClaims, user } = useAuth0();

  return (
    <>
      <div>
        <div className="container">
          <Container >
            <CardConnectSocial social_name={"Twitter"} social_image={'https://raw.githubusercontent.com/AngAven/mf-social-media-test/bbc084e1fb1cb40b2ec3033efbf34910a47b74af/public/icons/tw-icon.svg'} />
            <CardConnectSocial social_name={"Facebook"} social_image={'https://raw.githubusercontent.com/AngAven/mf-social-media-test/bbc084e1fb1cb40b2ec3033efbf34910a47b74af/public/icons/fb-icon.svg'} />
            <CardConnectSocial social_name={"LinkedIn"} social_image={'https://raw.githubusercontent.com/AngAven/mf-social-media-test/bbc084e1fb1cb40b2ec3033efbf34910a47b74af/public/icons/li-icon.svg'} />

          </Container>
          <div className="buttonContainer">
            <Link to="/dashboard">
              <button className="go-profile">Go to my profile </button>
            </Link>

          </div>
          <div className='buttonContainer'>
            <button onClick={() => handleConnection('facebook', user.sub, loginWithPopup, getAccessTokenSilently, getIdTokenClaims)}>Connect Facebook</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConnectSocial
