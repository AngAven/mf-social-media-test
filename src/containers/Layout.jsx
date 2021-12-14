import React from 'react'
import { HeaderContent, BtnGroup } from '../components/Header/Header.styles';
import { Button, Container } from '@mui/material';
import {Logotype} from '../components/Logotype/Logotype.js'

const Layout = ({children}) => {
  return (
    <div className="Layout">
       <HeaderContent>
      <Container>
       {/*  <Logotype width={140} /> */}
        {/* {!isLogged && (
          <BtnGroup>
            <Button variant="outlined" size="large" onClick={onClickLogin} type="button">
              Login
            </Button>
            <Button variant="contained" size="large" onClick={onClickSignup} type="button">
              Sign Up
            </Button>
          </BtnGroup>
        )}
        {isLogged && children} */}
      </Container>
    </HeaderContent> 
      
      <br/>
      <br/>
      {children}
      <br/>      
    </div>
  )
}

export default Layout
