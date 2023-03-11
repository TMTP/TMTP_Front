import React, { useState } from "react";
import { Link } from "gatsby";

function Navbar() {
  return (
    <div className="grid grid-cols-5 gap-1 lg:grid-cols-2 lg:px-16">
      <Link
        to="/a"
        className="bg-gray-200 py-4 px-6 rounded-md text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        A
      </Link>
      <Link
        to="/b"
        className="bg-gray-200 py-4 px-6 rounded-md text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        B
      </Link>
      <Link
        to="/c"
        className="bg-gray-200 py-4 px-6 rounded-md text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        C
      </Link>
      <Link
        to="/d"
        className="bg-gray-200 py-4 px-6 rounded-md text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        D
      </Link>
      <Link
        to="/e"
        className="bg-gray-200 py-4 px-6 rounded-md text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
      >
        E
      </Link>
      <style jsx>{`
        @media (max-width: 1023px) {
          .grid-cols-5 {
            grid-template-columns: repeat(3, 1fr);
          }
          .grid-cols-5 > *:nth-child(n + 4) {
            grid-column: span 2;
          }
        }
        @media (max-width: 639px) {
          .grid-cols-5 {
            grid-template-columns: repeat(2, 1fr);
          }
          .grid-cols-5 > *:nth-child(n + 4) {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
