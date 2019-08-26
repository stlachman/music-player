import React from "react";
import { createGlobalStyle } from "styled-components";
import Bar from "./components/Bar";
import "./App.css";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
        background-color: #fff2f6;
    }

  `;

  return (
    <>
      <GlobalStyle />
      <Bar />
    </>
  );
}

export default App;
