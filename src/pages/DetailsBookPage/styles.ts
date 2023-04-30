import styled from "styled-components";
import { Media } from "ui";

const StyledDetailsBookPage = styled.div`
  display: grid;
  grid-gap: 72px;
  margin-block: 72px;

  ${Media.MD} {
    grid-gap: 56px;
    margin-block: 56px;
  }
`;

const StyledError = styled.div`
  text-align: center;
  margin-top: 20%;
`;

export { StyledDetailsBookPage, StyledError };
