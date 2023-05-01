import { Footer } from "components";
import { Header } from "components/organisms/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "ui";
import { StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </StyledMainTemplate>
  );
};
