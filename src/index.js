import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./Themes";
import Footer from "./Components/Footer";

const StyledGlobal = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: linear-gradient(${(props) =>
    props.theme.colors.darkBlue}, ${(props) => props.theme.colors.lightBlue});
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;

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
  background: linear-gradient(${(props) => props.theme.colors.darkBlue}, ${(
  props
) => props.theme.colors.lightBlue});
}
body::-webkit-scrollbar-thumb {
  background-color: #154580;
  border-radius: 20px;
}

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
