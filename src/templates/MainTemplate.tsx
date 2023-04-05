import { Footer } from "components";
import { Header } from "components/organisms/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "ui";

export const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
