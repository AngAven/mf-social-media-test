import React from 'react';
import Header from '../components/Header/Header';

function handleClick() {
  history.push("/home");
}

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
      {children}
    </div >
  )
}

export default Layout;
