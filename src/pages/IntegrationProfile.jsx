import React from 'react';
import ProfileLinkedIn from '/src/components/ProfileLinkedIn'
import Header from '../components/Header/Header'

function handleClick() {
  history.push("/home");
}

const IntegrationProfile = () => {
    return (
      <div>
        <Header onClickLogin={handleClick} onClickSignup={handleClick} isLogged />
          <ProfileLinkedIn/>
      </div>
    )
  }
  
  export default IntegrationProfile
