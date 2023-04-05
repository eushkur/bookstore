import {
  FavoritesIcon,
  CartIcon,
  LogoIcon,
  DarkThemeIcon,
  AccountIcon,
  BurgerMenuIcon,
} from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { Breakpoint, Color } from "ui";
import {
  StyledHeader,
  ButtonLogo,
  Logo,
  List,
  ListItem,
  FavoritesButton,
  CartButton,
  UserButton,
  ButtonBurger,
  ToggleTheme,
} from "./styles";
import { SearchHeader } from "components/molecules/SearchHeader/SearchHeader";
import { HeaderLink } from "components/molecules/HeaderLink/HeaderLink";
import { useState, useEffect } from "react";
import { useWindowSize } from "hooks/useWindowSize";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <StyledHeader>
      <Link to={ROUTE.MAIN}>
        <ButtonLogo whileHover={{ scale: 1.15 }}>
          <Logo>
            <LogoIcon />
          </Logo>
        </ButtonLogo>
      </Link>

      {width > Breakpoint.LG && <SearchHeader />}

      <ToggleTheme onClick={toggleTheme} whileHover={{ scale: 1.15 }}>
        <DarkThemeIcon />
      </ToggleTheme>

      <List>
        <ListItem>
          <HeaderLink to={ROUTE.FAVORITES}>
            <FavoritesButton whileHover={{ scale: 1.15 }}>
              <FavoritesIcon width="26" stroke={Color.PRIMARY} />
            </FavoritesButton>
          </HeaderLink>
        </ListItem>

        <ListItem>
          <HeaderLink to={ROUTE.CART}>
            <CartButton whileHover={{ scale: 1.15 }}>
              <CartIcon width="26" stroke={Color.PRIMARY} />
            </CartButton>
          </HeaderLink>
        </ListItem>

        <ListItem>
          <HeaderLink to={ROUTE.ACCOUNT}>
            <UserButton whileHover={{ scale: 1.5 }}>
              <AccountIcon width="26" stroke={Color.PRIMARY} />
            </UserButton>
          </HeaderLink>
        </ListItem>
      </List>

      <ButtonBurger whileHover={{ scale: 1.15 }}>
        <BurgerMenuIcon width="26" height="26" fill={Color.PRIMARY} />
      </ButtonBurger>
    </StyledHeader>
  );
};
