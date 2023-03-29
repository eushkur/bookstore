import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

${theme}

body{
    font-family: 'Poppins', sans-serif;
    background: ${Color.WHITE};
    color: ${Color.PRIMARY};
}
`;
