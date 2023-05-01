import styled from "styled-components";
import { BODY2, H2, Media } from "ui";

const StyledSearchPage = styled.div`
  display: grid;
  grid-gap: 72px;
  margin-block: 72px;
  ${Media.MD} {
    grid-gap: 56px;
    margin-block: 56px;
  }
`;

const SearchBooks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  margin-top: 16px;
  ${BODY2}
  font-weight: 400;
`;

const BooksSearchWrapper = styled.ul`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  grid-gap: 48px;
  margin-top: 48px;
  ${Media.MD} {
    margin-top: 36px;
  }
`;

const Message = styled.h3`
  align-self: center;
  margin-top: 10%;
  ${H2};
`;

export { StyledSearchPage, SearchBooks, Info, BooksSearchWrapper, Message };
