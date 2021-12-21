import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Login.scss';
import Header from '../components/Header/Header'

function handleClick() {
  history.push("/home");
}


const Login = () => {
  return (
    <div>
      <Header onClickLogin={handleClick} onClickSignup={handleClick}  />

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

            <Link to="/connect-social">
              <input type="submit" value="LinkedIn" className="primary-button login-button-linkedin" />
            </Link>
            <Link to="/connect-social">
              <input type="submit" value="Facebook" className="primary-button login-button-facebook" />
            </Link>
            <Link to="/connect-social">
              <input type="submit" value="Twitter" className="primary-button login-button-twitter" />
            </Link>

            <a href="/">Forgot my password</a>
          </form>

          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
