import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
 padding: 0;
 margin: 0;
 box-sizing:border-box;}

input {
  border:none;
  }

button {
  border:none;
}

body {font-family: 'Inter', sans-serif;}

button {font-family:inherit}
  `;

export { GlobalStyles };
