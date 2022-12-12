import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`

@font-face {
  font-family: "GandhiSansRegular";
  src: local("GandhiSansRegular"), url("../assets/fonts/GandhiSans-Regular.otf") format("truetype");
  font-weight: 500;
  display: swap;
}
@font-face {
  font-family: "GandhiSansBold";
  src: local("GandhiSansBold"), url("../assets/fonts/GandhiSans-Bold.otf") format("truetype");
  font-weight: 700;
  display: swap;
}


body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: linear-gradient(#041833, #154580);
  box-sizing: border-box;
  font-family: GandhiSansRegular;
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
