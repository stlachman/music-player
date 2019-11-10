import React from "react";
import { createGlobalStyle } from "styled-components";
import Bar from "./components/Bar";
import "./App.css";
// https://design.invisionapp.com/public/prototype/sjqhsytlr000vwd01dowbvb4v/b791d24f

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
