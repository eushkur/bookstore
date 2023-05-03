import ReactStars from "react-rating-stars-component";
import { MouseEvent, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useToggle, useWindowSize } from "hooks";
import { Breakpoint, Color } from "ui";
import { ArrowLeftIcon, ChevronBottomIcon, ChevronTopIcon } from "assets";
import { Notification } from "components";

import {
  StyledDetailsBook,
  ButtonArrow,
  WrapperDetails,
  DetailsContainer,
  WrapperImage,
  Image,
  Like,
  WrapperInfo,
  InfoTitleContainer,
  Price,
  InfoContainer,
  InfoTitle,
  Info,
  ChevronButton,
  Preview,
  DescriptionBar,
  MoreDetails,
} from "./styles";
import { ButtonLike } from "components/atoms/ButtonLike/ButtonLike";
import { TabBar } from "components/atoms/TabBar/TabBar";
import { Title } from "components/atoms/Title/Title";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { addToFavotires } from "store/feautures/favoritesSlice";
import { addToCart } from "store/feautures/cartSlice";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { BookDetails } from "types/types";

interface Props {
  bookDetails: BookDetails;
}

export const DetailsBook = ({ bookDetails }: Props) => {
  const { title, image, price, rating, authors, publisher, year, isbn13, pages, pdf, desc } =
    bookDetails;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleIsOpen] = useToggle();
  const [isFavorites, toggleIsFavorites] = useToggle();
  const [tab, setTab] = useState<"description" | "authors">("description");
  const { isAuth } = useAppSelector(getUserInfo);
  const [isOpenNotification, toggleIsOpenNotification] = useToggle();

  const handlePage = () => {
    navigate(-1);
  };

  const handleDetails = (): void => {
    toggleIsOpen();
  };
  const handleAddFavorites = (e: MouseEvent<HTMLElement>): void => {
    if (isAuth) {
      e.preventDefault();
      dispatch(addToFavotires(bookDetails));
      toggleIsFavorites();
    }
  };
  const handleAddToCart = (e: MouseEvent<HTMLElement>): void => {
    if (isAuth) {
      e.preventDefault();
      dispatch(addToCart({ ...bookDetails, quantity: 0 }));
      toggleIsOpenNotification();
    }
  };

  return (
    <StyledDetailsBook>
      <ButtonArrow onClick={handlePage}>
        <ArrowLeftIcon
          width={width < Breakpoint.MD ? "30" : "40"}
          fill={Color.PRIMARY}
          stroke={Color.PRIMARY}
        />
      </ButtonArrow>

      <Title value={title} />

      <WrapperDetails>
        <DetailsContainer>
          <WrapperImage>
            <Image src={image} alt={title} />
            <Like onClick={handleAddFavorites}>
              <ButtonLike isFavorites={isFavorites} disabled={!isAuth} />
            </Like>
          </WrapperImage>

          <WrapperInfo>
            <InfoTitleContainer>
              <Price>{price === "$0.00" ? "for FREE" : price}</Price>

              <ReactStars
                count={5}
                value={+rating}
                size={30}
                color={Color.GRAY}
                activeColor={Color.PRIMARY}
                edit={false}
                isHalf={true}
              />
            </InfoTitleContainer>

            <InfoContainer>
              <InfoTitle>Authors</InfoTitle>
              <Info>{authors}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Publisher</InfoTitle>
              <Info>{publisher}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Year</InfoTitle>
              <Info>{year}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Pages</InfoTitle>
              <Info>{pages}</Info>
            </InfoContainer>

            {isOpen && (
              <InfoContainer>
                <InfoTitle>ISBN</InfoTitle>
                <Info>{isbn13}</Info>
              </InfoContainer>
            )}

            <MoreDetails>
              <Info>More detalise</Info>
              <ChevronButton onClick={handleDetails}>
                {isOpen ? (
                  <ChevronTopIcon width="16" fill={Color.PRIMARY} />
                ) : (
                  <ChevronBottomIcon width="16" fill={Color.PRIMARY} />
                )}
              </ChevronButton>
            </MoreDetails>

            <Button
              type="button"
              value="Add to cart"
              onClick={handleAddToCart}
              disabled={!isAuth}
            ></Button>
            <AnimatePresence>
              {isOpenNotification && (
                <Notification
                  value="The book has been added to the cart!"
                  toggleIsOpenNotification={toggleIsOpenNotification}
                />
              )}
            </AnimatePresence>

            {pdf && (
              <Preview href={Object.values(pdf)[0]} target="_blank">
                Preview book
              </Preview>
            )}
          </WrapperInfo>
        </DetailsContainer>
        <TabBar value1="Description" value2="Authors" setTab={setTab} />

        <DescriptionBar>{tab === "description" ? desc : authors}</DescriptionBar>
      </WrapperDetails>
    </StyledDetailsBook>
  );
};
