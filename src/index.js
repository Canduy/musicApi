import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./components/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import Provider from "./State/Provider";

const rootNode = document.getElementById("root");
ReactDOM.render(
  <GlobalStyle>
    <Provider>
      <App />
    </Provider>
  </GlobalStyle>,
  rootNode
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
