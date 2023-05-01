import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { resetCSS } from "./reset";
import { Color } from "ui";

export const GlobalStyles = createGlobalStyle`
${theme}
${resetCSS}
body{
  font-family: 'Poppins', sans-serif;
    background: ${Color.WHITE};
    color: ${Color.PRIMARY};
    }
`;
