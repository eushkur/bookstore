import styled from "styled-components";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
`;

const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  justify-content: center;
  align-content: center;
  padding: 50px 0px;
`;
const StyledError = styled.div`
  align-self: center;
  margin-top: 20%;
`;

export { StyledMainPage, StyledBooksList, StyledError };
