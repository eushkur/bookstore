import { Link } from "react-router-dom";
import { ROUTE } from "../../../routes/routes";
import { Book } from "../../../types/types";
import {
  StyledBookCard,
  WrapperImage,
  BookDescription,
  BookTitle,
  BookContainer,
  Price,
} from "./styles";

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard = ({ book }: BookCardProps) => {
  const { isbn13, title, subtitle, price, image } = book;

  return (
    <StyledBookCard>
      <Link to={`${ROUTE.DETAILS_BOOK}${isbn13}`}>
        <WrapperImage src={image} alt={title} />

        <BookContainer>
          <BookTitle>{title}</BookTitle>
          <BookDescription>{subtitle ? subtitle : "Other"}</BookDescription>
          <Price>{price === "$0.00" ? "FOR FREE" : price}</Price>
        </BookContainer>
      </Link>
    </StyledBookCard>
  );
};
