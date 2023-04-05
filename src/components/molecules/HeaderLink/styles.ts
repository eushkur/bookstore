import { PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledHeaderLink = styled.div<{ $active: PathMatch<string> | null }>`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: auto;
  box-shadow: ${({ $active }) => ($active ? `1px 1px 15px ${Color.GRAY}` : "none")};
`;

export { StyledHeaderLink };
