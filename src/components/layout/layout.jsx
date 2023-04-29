import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-[120vh]">
      <Header />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
