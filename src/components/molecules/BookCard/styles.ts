import styled from "styled-components";
import { Color } from "../../../ui/colors";
import { H3, BODY2 } from "../../../ui/typography";


const StyledBookCard = styled.li`
  display: grid;
  box-shadow: 1px 1px 12px ${Color.Gray}
`;

const WrapperImage = styled.img`
  width: 100%;
`;

const BookContainer = styled.div`
  display: grid;
`;

const BookTitle = styled.h3`
  ${H3}
`;

const BookDescription = styled.p`
  color: ${Color.Secondary};
  ${BODY2};
`;

const Price = styled.h3`
  ${H3};
`;

export { StyledBookCard, WrapperImage, BookTitle, BookDescription, Price, BookContainer };