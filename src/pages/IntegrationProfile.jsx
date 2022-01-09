import React from 'react';
import MainProfile from '/src/components/MainProfile'
import Header from '../components/Header/Header'

function handleClick() {
  history.push("/home");
}

const IntegrationProfile = () => {
    return (
      <div>
        <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
          <MainProfile/>
      </div>
    )
  }

  export default IntegrationProfile
