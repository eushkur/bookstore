import { Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { Button, ButtonWrapper, StyledRegistration } from "./styles";
import { RegistrationCustomLink } from "components";

const Registration = () => {
  return (
    <StyledRegistration>
      <ButtonWrapper>
        <RegistrationCustomLink to={ROUTE.SIGN_IN}>
          <Button>Sign In</Button>
        </RegistrationCustomLink>

        <RegistrationCustomLink to={ROUTE.SIGN_UP}>
          <Button>Sign Up</Button>
        </RegistrationCustomLink>
      </ButtonWrapper>

      <Outlet />
    </StyledRegistration>
  );
};
export { Registration };
