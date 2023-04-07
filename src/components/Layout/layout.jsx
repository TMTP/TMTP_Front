import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import Banner from "./banner";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Header />
      <div className="flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
