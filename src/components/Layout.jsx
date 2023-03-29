import React from "react";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/work-sans";
import "../assets/styles/global.css";
import Footer from "./Footer/Footer";
import CustomerReviews from "./CustomerReviews/CustomerReviews";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Layout;
