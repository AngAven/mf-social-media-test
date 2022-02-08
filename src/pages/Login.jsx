import { Box } from '@material-ui/core';
import React from 'react';
import LoginSocialButtons from '../components/LoginSocialButtons';
import { Redirect } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return <Box>Loading...</Box> ;
  } else if (isAuthenticated) {
    return <Redirect to="/dashboard"></Redirect>;
  } else {
    return <Box><LoginSocialButtons/></Box>;
  }
}

export default Login;