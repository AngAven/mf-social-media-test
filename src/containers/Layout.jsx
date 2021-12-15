import React from 'react';
import { HeaderContent, BtnGroup } from '../components/Header/Header.styles';
import { Button, Container } from '@mui/material';
import { Logotype } from '../components/Logotype/Logotype';


const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <HeaderContent>
        <Container>
          <img src="https://raw.githubusercontent.com/AngAven/mf-social-media-test/1f04b5afb08763732b900c02a02fbda896045a52/public/assets/img/logo.svg" alt="logo" />
          {/* <Logotype width={140} />   */}

        </Container>
      </HeaderContent >

      <br />
      <br />
      {children}
      <br />
    </div >
  )
}

export default Layout
