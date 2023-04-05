import { ReactNode } from "react";
import { useMatch, Link } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { StyledHeaderLink } from "./styles";

interface HeaderLinkProps {
  children: ReactNode;
  to: ROUTE;
}

export const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  const isActive = useMatch(to);

  return (
    <StyledHeaderLink $active={isActive}>
      <Link to={to}>{children}</Link>
    </StyledHeaderLink>
  );
};
