import { Container } from '@material-ui/core';
import React from 'react';
import LoginSocialButtons from '../components/LoginSocialButtons';
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router-dom'
import '../styles/pages/Login.scss';


const Login = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return <Container>Loading...</Container>
  } else if (isAuthenticated) {
    return <Redirect to="/dashboard"></Redirect>
  } else {
    return (<Container>
        <div className="login">
          <div className="form-container">
            <form action="/" className="form">
              <label className="label" >Login with: </label>
              <LoginSocialButtons />
            </form>
          </div>
        </div>
      </Container>)
  }
}

export default Login;
