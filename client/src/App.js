import React from "react";
import { createGlobalStyle } from "styled-components";
import Bar from "./components/Bar";
import "./App.css";

function App() {
  const GlobalStyle = createGlobalStyle`
    main {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <main>
        <Bar />
      </main>
    </>
  );
}

export default App;
