import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: linear-gradient(#041833, #154580);
  box-sizing: border-box;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>
);
