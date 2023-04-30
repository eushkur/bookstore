import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useToggle, useWindowSize } from "hooks";
import { BookDetails } from "types/types";
import { Breakpoint, Color } from "ui";
import { ArrowLeftIcon, ChevronBottomIcon, ChevronTopIcon } from "assets";
import { Notification } from "../../molecules/Notification/Notification";

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
  MoreDetailse,
  ChevronButton,
  Preview,
  DescriptionBar,
} from "./styles";
import { ButtonLike } from "components/atoms/ButtonLike/ButtonLike";
import { TabBar } from "components/atoms/TabBar/TabBar";
import { Title } from "components/atoms/Title/Title";
import { Button } from "../Registration/styles";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

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

  const handleDetalise = (): void => {
    toggleIsOpen();
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
            <Like>
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

            <MoreDetailse>
              <Info>More detalise</Info>
              <ChevronButton onClick={handleDetalise}>
                {isOpen ? (
                  <ChevronTopIcon width="16" fill={Color.PRIMARY} />
                ) : (
                  <ChevronBottomIcon width="16" fill={Color.PRIMARY} />
                )}
              </ChevronButton>
            </MoreDetailse>

            <Button type="button" value="Add to cart" disabled={!isAuth}></Button>
            <AnimatePresence>
              {isOpenNotification && (
                <Notification
                  value="The book has been added to the cart!"
                  toggleIsOpenNotification={toggleIsOpenNotification}
                />
              )}
            </AnimatePresence>

            {pdf && <Preview>Preview book</Preview>}
          </WrapperInfo>
        </DetailsContainer>
        <TabBar value1="Description" value2="Authors" setTab={setTab} />

        <DescriptionBar>{tab === "description" ? desc : authors}</DescriptionBar>
      </WrapperDetails>
    </StyledDetailsBook>
  );
};
