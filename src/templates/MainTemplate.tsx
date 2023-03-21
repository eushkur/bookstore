import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/organisms/Footer/Footer'
import { Nav } from '../components/organisms/Nav/Nav'

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
