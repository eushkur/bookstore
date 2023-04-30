import styled from "styled-components";
import { Color } from "ui";

const StyledCloseCard = styled.button`
  padding: 16px;
  background: none;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 15px ${Color.GRAY};
  }
`;

export { StyledCloseCard };
