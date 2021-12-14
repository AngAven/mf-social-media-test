import React from 'react';
import { HeaderContent, BtnGroup } from '../components/Header/Header.styles';
import { Button, Container } from '@mui/material';
import { Logotype } from '../components/Logotype/Logotype';


const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <HeaderContent>
        <Container>
          <img src="../public/assets/img/logo.svg" alt="logo" />
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
