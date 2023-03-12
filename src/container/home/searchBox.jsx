import React, { useState } from "react";
import { navigate } from "gatsby";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form onSubmit={handleSubmit} className="relative w-1/2 sm:hidden">
        <input
          type="text"
          placeholder="Search"
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={query}
          onChange={handleInputChange}
          autoFocus
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 bg-transparent hover:text-gray-700"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
