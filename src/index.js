import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Auth0Provider
      domain="platzimaster.us.auth0.com"
      clientId="2KsRikMLcvPmKDsIaxJMGIcHJoc9D0Z7"
      audience="https://platzimaster.us.auth0.com/api/v2/"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,
  </ThemeProvider>,
  document.getElementById("app")
);
