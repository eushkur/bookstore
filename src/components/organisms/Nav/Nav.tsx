import { CustomLink } from "components";
import { ROUTE } from "routes/routes";

export const Nav = () => {
  return (
    <nav className="bg-info p-3 d-flex gap-3">
      <CustomLink to={ROUTE.MAIN}>Main</CustomLink>
      <CustomLink to={ROUTE.ACCOUNT}>Account</CustomLink>
      <CustomLink to={ROUTE.BOOK}>Book</CustomLink>
      <CustomLink to={ROUTE.CART}>Cart</CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>Favorites</CustomLink>
      <CustomLink to={ROUTE.SEARCH}>Search</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>SignIn</CustomLink>
      <CustomLink to={ROUTE.RESET}>Reset</CustomLink>
      <CustomLink to={ROUTE.SIGN_UP}>SignUp</CustomLink>
    </nav>
  );
};
