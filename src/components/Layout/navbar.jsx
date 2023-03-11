import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="grid grid-cols-5 ">
      <Link
        to="/a"
        className="bg-gray-200 py-4 px-6  text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        A
      </Link>
      <Link
        to="/b"
        className="bg-gray-200 py-4 px-6  text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        B
      </Link>
      <Link
        to="/c"
        className="bg-gray-200 py-4 px-6  text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        C
      </Link>
      <Link
        to="/d"
        className="bg-gray-200 py-4 px-6  text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        D
      </Link>
      <Link
        to="/e"
        className="bg-gray-200 py-4 px-6  text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        E
      </Link>
    </div>
  );
};

export default Navbar;
