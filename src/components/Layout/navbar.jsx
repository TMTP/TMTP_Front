import React, { useState } from "react";
import { Link } from "gatsby";
import useNavbarDetail from "../../hooks/components/navbar/hook";

function Navbar() {
  const { data } = useNavbarDetail();
  return (
    <div className="grid grid-cols-5  lg:grid-cols-2 lg:px-16">
      {data.map((data, index) => {
        return (
          <Link
            to={data.url}
            key={index}
            className="bg-gray-200 border-blue-200 border-[2px] py-4 px-6 rounded-xl text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
          >
            {data.name}
          </Link>
        );
      })}
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
