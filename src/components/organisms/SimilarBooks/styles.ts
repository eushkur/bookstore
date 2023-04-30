import styled from "styled-components";
import { Media } from "ui";

const StyledSimilarBooks = styled.div`
  display: grid;
  grid-gap: 48px;

  ${Media.MD} {
    grid-gap: 36px;
  }
`;

export { StyledSimilarBooks };
