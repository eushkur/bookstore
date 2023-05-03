import ReactStars from "react-rating-stars-component";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Color } from "ui";
import { ROUTE } from "routes";
import {
  StyledFavoritesCard,
  WrapperImage,
  Image,
  InfoContainer,
  InfoTitleContainer,
  Price,
  WrapperInfo,
  InfoTitle,
  Info,
  Like,
} from "./styles";
import { BookDetails } from "types/types";
import { useToggle } from "hooks";
import { removeFavorite, useAppDispatch } from "store";
import { ButtonLike } from "components";

const favoritesCardVariants = {
  visible: (index: number) => ({
    opacity: 1,
    x: "0",
    transition: { delay: index * 0.1, duration: 0.75 },
  }),
  hidden: { opacity: 0, x: "-20%" },
};

interface FavoritesProps {
  book: BookDetails;
  index: number;
}

export const FavoritesCard = ({ book, index }: FavoritesProps) => {
  const [isFavorites, toggleIsFavorites] = useToggle(true);
  const dispatch = useAppDispatch();
  const { title, authors, year, image, price, rating, isbn13 } = book;

  const handleDeleteFavorites = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(removeFavorite(book.isbn13));
    toggleIsFavorites();
  };
  return (
    <Link to={`${ROUTE.DETAILS}${isbn13}`}>
      <StyledFavoritesCard
        whileHover={{ scale: 1.1 }}
        variants={favoritesCardVariants}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        <WrapperImage>
          <Image src={image} alt={title} />
        </WrapperImage>

        <WrapperInfo>
          <InfoContainer>
            <InfoTitle>{title}</InfoTitle>
            <Info>
              {authors}, {year}
            </Info>
          </InfoContainer>

          <InfoTitleContainer>
            <Price>{price === "$0.00" ? "for FREE" : price}</Price>
            <ReactStars
              count={5}
              value={+rating}
              size={20}
              color={Color.GRAY}
              activeColor={Color.PRIMARY}
              edit={false}
              isHalf={true}
            />
          </InfoTitleContainer>
        </WrapperInfo>
        <Like onClick={handleDeleteFavorites}>
          <ButtonLike isFavorites={isFavorites} />
        </Like>
      </StyledFavoritesCard>
    </Link>
  );
};
