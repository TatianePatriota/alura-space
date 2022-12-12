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
  font-family: 'Open Sans', sans-serif;
;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body::-webkit-scrollbar {
  width: 6px;
}

body::-webkit-scrollbar-track {
  background: linear-gradient(#041833, #154580);
}
body::-webkit-scrollbar-thumb {
  background-color: #154580;
  border-radius: 20px;
}


`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>
);
