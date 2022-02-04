import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  /* const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE; */
  const domain = 'platzimaster.us.auth0.com';
  const clientId = '2KsRikMLcvPmKDsIaxJMGIcHJoc9D0Z7';
  const audience = 'https://platzimaster.us.auth0.com/api/v2/'; 

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      scope="update:current_user_identities"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;