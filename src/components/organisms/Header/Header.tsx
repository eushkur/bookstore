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
  HeaderContainer,
  StyledHeader,
  ButtonLogo,
  Logo,
  List,
  Item,
  FavoritesButton,
  CartButton,
  UserButton,
  ButtonBurger,
  ToggleTheme,
} from "./styles";
import { SearchHeader } from "components/molecules/SearchHeader/SearchHeader";
import { HeaderLink } from "components/molecules/HeaderLink/HeaderLink";
import { useState, useEffect } from "react";
import { useWindowSize } from "store/hooks/useWindowSize";

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
    <HeaderContainer>
      <StyledHeader>
        <Link to={ROUTE.MAIN}>
          <ButtonLogo whileHover={{ scale: 1.05 }}>
            <Logo>
              <LogoIcon />
            </Logo>
          </ButtonLogo>
        </Link>

        {width > Breakpoint.LG && <SearchHeader />}

        <ToggleTheme onClick={toggleTheme} whileHover={{ scale: 1.1 }}>
          <DarkThemeIcon />
        </ToggleTheme>

        <List>
          <Item>
            <HeaderLink to={ROUTE.FAVORITES}>
              <FavoritesButton whileHover={{ scale: 1.1 }}>
                <FavoritesIcon width="26" stroke={Color.PRIMARY} />
              </FavoritesButton>
            </HeaderLink>
          </Item>

          <Item>
            <HeaderLink to={ROUTE.CART}>
              <CartButton whileHover={{ scale: 1.1 }}>
                <CartIcon width="26" stroke={Color.PRIMARY} />
              </CartButton>
            </HeaderLink>
          </Item>

          <Item>
            <HeaderLink to={ROUTE.ACCOUNT}>
              <UserButton whileHover={{ scale: 1.1 }}>
                <AccountIcon width="26" stroke={Color.PRIMARY} />
              </UserButton>
            </HeaderLink>
          </Item>
        </List>

        <ButtonBurger whileHover={{ scale: 1.1 }}>
          <BurgerMenuIcon width="26" height="26" fill={Color.PRIMARY} />
        </ButtonBurger>
      </StyledHeader>
    </HeaderContainer>
  );
};
