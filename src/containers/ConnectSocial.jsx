import React from 'react'
import {Container} from '@mui/material'
import CardConnectSocial from '../components/CardConnectSocial'
import '../styles/containers/ConnectSocial.scss'

const ConnectSocial = () => {
  return (
    <>
      <h1 className={'title'}>Connect Social Network</h1>
        <Container>
          <CardConnectSocial social_name={"Twitter"} social_image={'https://raw.githubusercontent.com/AngAven/mf-social-media-test/1ef7dc070e3524db2f9897fa875a6e319768309e/public/assets/img/tw.svg'}/>
          <CardConnectSocial social_name={"Facebook"} social_image={'https://raw.githubusercontent.com/AngAven/mf-social-media-test/1ef7dc070e3524db2f9897fa875a6e319768309e/public/assets/img/fb.svg'}/>
          <CardConnectSocial social_name={"LinkedIn"} social_image={'https://raw.githubusercontent.com/AngAven/mf-social-media-test/1ef7dc070e3524db2f9897fa875a6e319768309e/public/assets/img/li.svg'}/>
        </Container>
    </>
  )
}

export default ConnectSocial
