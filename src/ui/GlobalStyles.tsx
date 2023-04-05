import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

${theme}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  a {
     text-decoration: none;
  }
  body{
    font-family: 'Poppins', sans-serif;
    background: ${Color.WHITE};
    color: ${Color.PRIMARY};
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    cursor: pointer;
  }

`;
