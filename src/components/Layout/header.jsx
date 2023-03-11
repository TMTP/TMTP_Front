import React, { useState } from "react";
import { Link } from "gatsby";
import useHeaderDetail from "../../hooks/components/header/hook";

const Header = () => {
  const { title } = useHeaderDetail();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      window.location.href = `/search/${searchTerm}`;
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link to="/" className="font-bold text-xl tracking-tight">
          {title}
        </Link>
      </div>
      <div className="flex items-center w-auto">
        <form className="flex-grow" onSubmit={handleSearch}>
          <div className="flex items-center border-b-2 border-white py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            ></input>
            <button
              className="flex-shrink-0 bg-white hover:bg-gray-100 border-white hover:border-gray-100 text-blue-500 font-semibold border-4 py-1 px-2 rounded"
              type="submit"
            >
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18.601,17.003l-4.301-4.301c1.101-1.401,1.801-3.201,1.801-5.201c0-4.401-3.601-8-8-8C3.599,0.501,0,4.101,0,8.501s3.599,8,8,8c2,0,3.801-0.7,5.201-1.801l4.301,4.301c0.299,0.299,0.801,0.299,1.1,0l1.5-1.5C18.899,17.803,18.899,17.303,18.601,17.003zM8,13.5C4.4,13.5,1.5,10.6,1.5,7s2.9-6.5,6.5-6.5s6.5,2.9,6.5,6.5S11.6,13.5,8,13.5z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
