import React, { useState } from "react";
import { Link } from "gatsby";
import useHeaderDetail from "../../hooks/components/header/hook";
import { FaSearch } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const { title, data } = useHeaderDetail();
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
        <img src="./Logo.svg" alt="LogoImg" />
        <Link to="/" className="font-bold text-xl tracking-tight">
          <h2>{title}</h2>
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
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
