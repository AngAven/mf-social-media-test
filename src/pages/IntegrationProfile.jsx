import React from 'react';
import Header from '../components/Header/Header'
import DashBoard from '/src/pages/Dashboard';

function handleClick() {
  history.push("/home");
}

const IntegrationProfile = () => {
    return (
      <div>
        <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
          <DashBoard/>
      </div>
    )
  }

  export default IntegrationProfile
