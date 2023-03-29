import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "ui/container";
import { Footer, Nav } from "../components";

export const MainTemplate = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
      <Footer />
    </Container>
  );
};
