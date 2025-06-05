import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GlobalContext from "../context/GlobalContext";
import Loader from "../components/Loader";

const DefaultLayout = () => {
  const { isLoading } = useContext(GlobalContext);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container mt-4">
          {isLoading && <Loader />}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
