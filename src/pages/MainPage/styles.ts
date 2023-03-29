import styled from "styled-components";

const StyledMainPage = styled.div`
  display: grid;
`;

const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  justify-content: center;
  align-content: center;
  margin-top: 50px;
`;

export { StyledMainPage, StyledBooksList };
