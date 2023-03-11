import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
