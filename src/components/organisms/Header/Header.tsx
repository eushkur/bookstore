import {
  FavoritesIcon,
  CartIcon,
  AccountIcon,
  DarkThemeIcon,
  LightThemeIcon,
  BurgerMenuIcon,
  FavoritesActiveIcon,
  CartActiveIcon,
  LogoIcon,
} from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { Breakpoint, Color, Container } from "ui";
import {
  WrapperHeader,
  StyledHeader,
  ButtonLogo,
  List,
  FavoritesButton,
  CartButton,
  UserButton,
  ButtonBurger,
  ToggleTheme,
  ListItem,
} from "./styles";
import { SearchHeader } from "components/molecules/SearchHeader/SearchHeader";
import { useWindowSize } from "hooks/useWindowSize";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getFavoritesBooks } from "store/selectors/favoritesSelectors";
import { useToggle } from "hooks";
import { changeTheme } from "store/feautures/userSlice";
import { getUserInfo } from "store/selectors/userSelectors";
import { AnimatePresence } from "framer-motion";
import { HeaderLink } from "components/molecules/HeaderLink/HeaderLink";
import { BurgerMenu } from "components/atoms/Burger/Burger";
import { getCartBooks } from "store/selectors/cartSelectors";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getUserInfo);
  const [isDark, toggleIsInstallDark] = useToggle();
  const [isOpen, toggleIsOpen] = useToggle();
  const { cartBooks } = useAppSelector(getCartBooks);
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);
  const setAttributeTheme = (themeValue: "light" | "dark") => {
    document.documentElement.setAttribute("theme", `${themeValue}`);
  };

  setAttributeTheme(theme);

  const handleTheme = () => {
    if (theme === "dark") {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }

    setAttributeTheme(theme);
    toggleIsInstallDark();
  };
  const handleBurger = (): void => {
    toggleIsOpen();
  };
  return (
    <WrapperHeader>
      <Container>
        <StyledHeader>
          <Link to={ROUTE.MAIN}>
            <ButtonLogo whileHover={{ scale: 1.05 }}>
              <LogoIcon width={width < Breakpoint.MD ? "122" : "137"} stroke={Color.PRIMARY} />
            </ButtonLogo>
          </Link>

          {width > Breakpoint.LG && <SearchHeader />}

          <ToggleTheme onClick={handleTheme} whileHover={{ scale: 1.1 }}>
            {isDark ? (
              <DarkThemeIcon width="24" fill={Color.PRIMARY2} />
            ) : (
              <LightThemeIcon width="24" fill={Color.PRIMARY2} />
            )}
          </ToggleTheme>

          <List>
            <ListItem key="1">
              <HeaderLink to={ROUTE.FAVORITES}>
                <FavoritesButton whileHover={{ scale: 1.1 }}>
                  {favoritesBooks.length > 0 ? (
                    <FavoritesActiveIcon width="24" stroke={Color.PRIMARY} />
                  ) : (
                    <FavoritesIcon width="24" fill={Color.WHITE2} />
                  )}
                </FavoritesButton>
              </HeaderLink>
            </ListItem>

            <ListItem key="2">
              <HeaderLink to={ROUTE.CART}>
                <CartButton whileHover={{ scale: 1.1 }}>
                  {cartBooks.length > 0 ? (
                    <CartActiveIcon width="24" stroke={Color.PRIMARY} />
                  ) : (
                    <CartIcon width="24" fill={Color.WHITE2} />
                  )}
                </CartButton>
              </HeaderLink>
            </ListItem>

            <ListItem key="3">
              <HeaderLink to={ROUTE.ACCOUNT}>
                <UserButton whileHover={{ scale: 1.1 }}>
                  <AccountIcon width="26" fill={Color.WHITE2} />
                </UserButton>
              </HeaderLink>
            </ListItem>
          </List>

          <ButtonBurger whileHover={{ scale: 1.1 }}>
            <BurgerMenuIcon width="28" height="28" stroke={Color.WHITE2} onClick={handleBurger} />
          </ButtonBurger>
          <AnimatePresence>{isOpen && <BurgerMenu handleBurger={handleBurger} />} </AnimatePresence>
        </StyledHeader>
      </Container>
    </WrapperHeader>
  );
};
