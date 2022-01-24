import React from 'react'
import { Container } from '@mui/material'
import CardConnectSocial from '../components/CardConnectSocial'
import '../styles/containers/ConnectSocial.scss'
import { Link } from 'react-router-dom';

function handleClick() {
  history.push("/home");
}

const ConnectSocial = () => {
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
        </div>
      </div>
    </>
  )
}

export default ConnectSocial
