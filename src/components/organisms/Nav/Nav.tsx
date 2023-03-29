import { CustomLink } from "components";
import { useState, useEffect } from "react";
import { ROUTE } from "routes/routes";

export const Nav = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
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
      <button onClick={toggleTheme}>ToggleTheme</button>
    </nav>
  );
};
