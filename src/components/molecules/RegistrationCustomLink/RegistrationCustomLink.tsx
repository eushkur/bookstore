import React, { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledCustomLink } from "./styles";

interface Props {
  children: ReactNode;
  to: ROUTE;
}

export const RegistrationCustomLink = ({ to, children }: Props) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $active={isActive}>
      <Link to={to}>{children}</Link>
    </StyledCustomLink>
  );
};
