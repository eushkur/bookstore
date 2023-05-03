import Spinner from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { ROUTE } from "routes";
import { BurgerHeader, Description, StyledBurgerMenu, WrapperContent, Error } from "./styles";
import { fetchSignOut } from "store/feautures/userSlice";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

import { CloseCardIcon } from "assets";
import { Button, SearchHeader } from "components";

interface BurgerProps {
  handleBurger: () => void;
}

export const BurgerMenu = ({ handleBurger }: BurgerProps) => {
  const { isPendingAuth, error, isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const handleAuth = (): void => {
    dispatch(fetchSignOut()).then(() => {
      handleBurger();
    });
  };

  return (
    <StyledBurgerMenu onClick={handleBurger}>
      <WrapperContent onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}>
        <BurgerHeader>
          <CloseCardIcon onClick={handleBurger} />
        </BurgerHeader>

        <SearchHeader handleBurger={handleBurger} />
        {isAuth ? (
          <>
            <Link to={ROUTE.FAVORITES}>
              <Description onClick={handleBurger}>Favorites</Description>
            </Link>

            <Link to={ROUTE.CART}>
              <Description onClick={handleBurger}>Cart</Description>
            </Link>

            <Link to={ROUTE.ACCOUNT}>
              <Description onClick={handleBurger}>Account</Description>
            </Link>

            <Button type="button" value="Log Out" onClick={handleAuth}>
              <Spinner loading={isPendingAuth} size={25} />
            </Button>

            {error && <Error>{error}</Error>}
          </>
        ) : (
          <Link to={ROUTE.SIGN_IN}>
            <Button type="button" value="Sign In" onClick={handleBurger} />{" "}
          </Link>
        )}
      </WrapperContent>
    </StyledBurgerMenu>
  );
};
