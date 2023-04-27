import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { theme } from "./theme";
import { resetCSS } from "./reset";

export const GlobalStyles = createGlobalStyle`
${theme}
${resetCSS}
body{
  font-family: 'Poppins', sans-serif;
    background: ${Color.WHITE};
    color: ${Color.PRIMARY};
    }
`;
