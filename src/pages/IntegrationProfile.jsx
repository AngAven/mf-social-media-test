import React from 'react';
import DashBoard from '/src/pages/Dashboard';

function handleClick() {
  history.push("/home");
}

const IntegrationProfile = () => {
    return (
      <div>
          <DashBoard/>
      </div>
    )
  }

  export default IntegrationProfile
