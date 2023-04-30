import {
  FavoritesIcon,
  CartIcon,
  AccountIcon,
  DarkThemeIcon,
  LightThemeIcon,
  BurgerMenuIcon,
  CartActiveIcon,
  FavoritesActiveIcon,
} from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { Breakpoint, Color, Container } from "ui";
import {
  WrapperHeader,
  StyledHeader,
  ButtonLogo,
  Logo,
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

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getUserInfo);
  const [isDark, toggleIsInstallDark] = useToggle();
  const [isOpen, toggleIsOpen] = useToggle();
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
              <Logo>BOOKSTORE</Logo>
            </ButtonLogo>
          </Link>

          {width > Breakpoint.LG && <SearchHeader />}

          <ToggleTheme onClick={handleTheme} whileHover={{ scale: 1.1 }}>
            {isDark ? (
              <DarkThemeIcon width="24" fill={Color.PRIMARY} />
            ) : (
              <LightThemeIcon width="24" fill={Color.PRIMARY} />
            )}
          </ToggleTheme>

          <List>
            <ListItem>
              <HeaderLink to={ROUTE.FAVORITES}>
                <FavoritesButton whileHover={{ scale: 1.1 }}>
                  {favoritesBooks.length > 0 ? (
                    <FavoritesActiveIcon width="24" stroke={Color.PRIMARY} />
                  ) : (
                    <FavoritesIcon width="24" stroke={Color.PRIMARY} />
                  )}
                </FavoritesButton>
              </HeaderLink>
            </ListItem>

            <ListItem>
              <HeaderLink to={ROUTE.CART}>
                <CartButton whileHover={{ scale: 1.1 }}>
                  <CartIcon width="24" stroke={Color.PRIMARY} />
                </CartButton>
              </HeaderLink>
            </ListItem>

            <ListItem>
              <HeaderLink to={ROUTE.ACCOUNT}>
                <UserButton whileHover={{ scale: 1.1 }}>
                  <AccountIcon width="26" stroke={Color.PRIMARY} />
                </UserButton>
              </HeaderLink>
            </ListItem>
          </List>

          <ButtonBurger whileHover={{ scale: 1.1 }}>
            <BurgerMenuIcon width="28" height="28" fill={Color.PRIMARY} onClick={handleBurger} />
          </ButtonBurger>
          <AnimatePresence>{isOpen && <BurgerMenu handleBurger={handleBurger} />} </AnimatePresence>
        </StyledHeader>
      </Container>
    </WrapperHeader>
  );
};
