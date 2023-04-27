import { Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { Button, ButtonWrapper, StyledRegistration } from "./styles";
import { RegistrationCustomLink } from "components";

const Registration = () => {
  return (
    <StyledRegistration>
      <ButtonWrapper>
        <RegistrationCustomLink to={ROUTE.SIGN_IN}>
          <Button>Sign in</Button>
        </RegistrationCustomLink>

        <RegistrationCustomLink to={ROUTE.SIGN_UP}>
          <Button>Sign up</Button>
        </RegistrationCustomLink>
      </ButtonWrapper>

      <Outlet />
    </StyledRegistration>
  );
};
export { Registration };
