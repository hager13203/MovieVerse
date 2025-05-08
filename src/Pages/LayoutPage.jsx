import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Footer from "../Components/Footer";

const LayoutPage = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register"  && (
        <Navbar></Navbar>
      )}
      <div  >{children}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default LayoutPage;
