import { Outlet } from "react-router-dom";
import { Footer, Nav } from "../components";


export const MainTemplate = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Nav />
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
    </div>
  );
};
