import React from 'react'
import { HeaderContent, BtnGroup } from '../components/Header/Header.styles';
import { Button, Container } from '@mui/material';
import { Logotype } from '../components/Logotype/Logotype'


const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <HeaderContent>
        <Container>
          {/* <Logotype width={140} />   */}
          {/* < Button
            key="1"
            color="primary"
            size="large"
            variant="contained"
          >
            Sign In
          </Button> */}

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
