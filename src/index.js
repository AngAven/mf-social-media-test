import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
    ,
  </ThemeProvider>,
  document.getElementById("app")
);
