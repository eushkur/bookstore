import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookCart } from "types/types";
import { Breakpoint, Color } from "ui";
import {
  ButtonArrow,
  CartContainer,
  CartWrapper,
  Info,
  InfoContainer,
  InfoTitle,
  Message,
  Price,
  ResultContainer,
  StyledCartPage,
} from "./styles";
import { useWindowSize } from "hooks/useWindowSize";
import { Title, Button } from "components";
import { useToggle } from "hooks";
import { Notification } from "components/molecules/Notification/Notification";
import { resetDebounceSearchValue } from "store/feautures/searchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getCartBooks } from "store/selectors/cartSelectors";
import { getBooksBySearch } from "../../store/selectors/searchSelectors";
import { calcTotal } from "store/feautures/cartSlice";
import { ArrowLeftIcon } from "assets";
import { CartCard } from "components/molecules/CartCard/CartCard";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();
  const { cartBooks, sum, vat, total } = useAppSelector(getCartBooks);
  const { debounceSearchValue } = useAppSelector(getBooksBySearch);
  const [currentCartBooks, setCurrentCartBooks] = useState<BookCart[]>(cartBooks);
  const [isOpenNotification, toggleIsOpenNotification] = useToggle();

  const totalQuantity = cartBooks.reduce((sum, book) => {
    return book.quantity + sum;
  }, 0);

  const handlePage = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(calcTotal());
  }, [dispatch, totalQuantity]);

  useEffect(() => {
    dispatch(resetDebounceSearchValue());
  }, [dispatch]);

  useEffect(() => {
    debounceSearchValue &&
      setCurrentCartBooks(
        cartBooks.filter((book) => {
          return book.title.toLowerCase().includes(debounceSearchValue.toLowerCase());
        }),
      );
    !debounceSearchValue && setCurrentCartBooks(cartBooks);
  }, [debounceSearchValue, cartBooks]);

  const handleClick = (): void => {
    toggleIsOpenNotification();
  };

  return (
    <StyledCartPage>
      <CartWrapper>
        <ButtonArrow onClick={handlePage} whileHover={{ scale: 1.2 }}>
          <ArrowLeftIcon
            width={width < Breakpoint.MD ? "30" : "40"}
            fill={Color.PRIMARY}
            stroke={Color.PRIMARY}
          />
        </ButtonArrow>

        <Title value="Your cart" />

        <CartContainer>
          {currentCartBooks.length !== 0 ? (
            currentCartBooks.map((book, index) => {
              return <CartCard key={book.isbn13} book={book} index={index} />;
            })
          ) : (
            <Message>
              {debounceSearchValue ? "No results found. 😔" : "Your shopping cart is empty. 😔"}
            </Message>
          )}
        </CartContainer>

        {cartBooks.length !== 0 && (
          <ResultContainer>
            <InfoContainer>
              <InfoTitle>Sum total</InfoTitle>
              <Info>${sum.toFixed(2)}</Info>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>VAT</InfoTitle>
              <Info>${vat.toFixed(2)}</Info>
            </InfoContainer>

            <InfoContainer>
              <Price>Total </Price>
              <Price>${total.toFixed(2)}</Price>
            </InfoContainer>

            <Button type="button" value="Check out" onClick={handleClick}></Button>
          </ResultContainer>
        )}

        <AnimatePresence>
          {isOpenNotification && (
            <Notification
              value="The order has been placed!"
              toggleIsOpenNotification={toggleIsOpenNotification}
            />
          )}
        </AnimatePresence>
      </CartWrapper>
    </StyledCartPage>
  );
};
