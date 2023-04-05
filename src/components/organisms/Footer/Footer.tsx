import { FooterDescription, StyledFooter, WrapperFooter } from "./styles";

export const Footer = () => {
  return (
    <WrapperFooter>
      <StyledFooter>
        <FooterDescription>© 2022 Bookstore</FooterDescription>
        <FooterDescription>All rights reserved</FooterDescription>
      </StyledFooter>
    </WrapperFooter>
  );
};
