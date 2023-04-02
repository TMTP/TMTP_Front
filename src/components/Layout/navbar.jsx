import React from "react";
import { Link } from "gatsby";
import useNavbarDetail from "../../hooks/components/Layout/navbar/hook";

function Navbar() {
  const { data } = useNavbarDetail();
  return (
    <div className="grid grid-cols-3 sm:w-auto sm:h-auto ">
      {data.map((data, index) => {
        return (
          <Link
            to={data.url}
            key={index}
            className="bg-gray-200 border-blue-200 border-[2px] py-4 px-6  text-lg font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900"
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
