import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mt-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
