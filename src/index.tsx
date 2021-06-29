import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./state/store";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { Auth0Provider } from "@auth0/auth0-react";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createMuiTheme({
  direction: "rtl",
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN ?? ""}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID ?? ""}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StylesProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
