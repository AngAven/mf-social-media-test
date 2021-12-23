import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import LoginSocialButtons from '../components/LoginSocialButtons';

import '../styles/pages/Login.scss';
import Header from '../components/Header/Header'

function handleClick() {
  history.push("/home");
}


const Login = () => {
  return (
    <div>
      <Header onClickLogin={handleClick} onClickSignup={handleClick} />

      <div className="login">
        <div className="form-container">

          <form action="/" className="form">
            <label htmlFor="email" className="label">Email address</label>
            <input type="text" id="email" placeholder="email@example.com" className="input input-email" />

            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />

            <Link to="/main_features">
              <input type="submit" value="Login" className="primary-button login-button" />
            </Link>

            <label className="label"  >Connect with</label>
            <LoginSocialButtons/>

            <a href="/">Forgot my password</a>
          </form>

          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
