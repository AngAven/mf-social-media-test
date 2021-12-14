import React from 'react'

import '../styles/pages/Login.scss'


const routeChange = () =>{ 
  let  path="/connect-social"; 
  history.push(path);
}

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">

        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" id="email" placeholder="email@example.com" className="input input-email" />

          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />

          <input type="submit" value="Log in" className="primary-button login-button" onClick={routeChange}  />
          <input type="submit" value="Connect with LinkedIn" className="primary-button login-button-linkedin" />

          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>

  )
}

export default Login
