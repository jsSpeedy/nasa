"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --clr: #222327;
}


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}

html,
body {
  max-width: 100vw;
  height: 100%;
  overflow-x: hidden;
}

body {
  background: var(--clr);
  font-weight: 700;
  font-size: 18px;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  padding-top: 100px;
}

`;

export default GlobalStyle;
