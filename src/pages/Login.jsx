import { Container } from '@material-ui/core';
import React from 'react';
import LoginSocialButtons from '../components/LoginSocialButtons';

import '../styles/pages/Login.scss';


const Login = () => {
  return (
    <Container>
      <div className="login">
        <div className="form-container">
          <form action="/" className="form">
            <label className="label" >Login with: </label>
            <LoginSocialButtons />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Login;
