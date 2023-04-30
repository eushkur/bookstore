import styled from "styled-components";
import { Media } from "ui";

const StyledFavoritesPage = styled.div`
  display: grid;
  grid-gap: 72px;
  margin-block: 72px;
  ${Media.MD} {
    grid-gap: 56px;
    margin-block: 56px;
  }
`;

export { StyledFavoritesPage };
