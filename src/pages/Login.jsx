import React from 'react';
import LoginSocialButtons from '../components/LoginSocialButtons';

import '../styles/pages/Login.scss';

function handleClick() {
  history.push("/home");
}


const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="form-container">
          <form action="/" className="form">
            <label className="label" >Login with: </label>
            <LoginSocialButtons />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
