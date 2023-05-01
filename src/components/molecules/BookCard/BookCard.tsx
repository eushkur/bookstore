import { Link } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { Book } from "types/types";
import ReactStars from "react-rating-stars-component";
import {
  StyledBookCard,
  WrapperImage,
  BookDescription,
  BookTitle,
  BookContainer,
  Price,
  PriceContainer,
} from "./styles";
import { Color } from "ui";

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard = ({ book, index }: BookCardProps) => {
  const { isbn13, title, subtitle, image, price, rating } = book;

  return (
    <StyledBookCard
      whileHover={{ boxShadow: `1px 1px 15px ${Color.SECONDARY}` }}
      initial="hidden"
      custom={index}
    >
      <Link to={`${ROUTE.DETAILS_BOOK}${isbn13}`}>
        <WrapperImage src={image} alt={title} />

        <BookContainer>
          <BookTitle>{title}</BookTitle>
          <BookDescription>{subtitle ? subtitle : "Other"}</BookDescription>
          <PriceContainer>
            <Price>{price === "$0.00" ? "FOR FREE" : price}</Price>
            <ReactStars
              count={5}
              value={+rating}
              size={30}
              color={Color.GRAY}
              edit={false}
              isHalf={true}
            />
          </PriceContainer>
        </BookContainer>
      </Link>
    </StyledBookCard>
  );
};
