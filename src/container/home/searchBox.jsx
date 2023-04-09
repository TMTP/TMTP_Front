import React, { useState, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.autofocus) {
      inputRef.current.focus();
    }
  }, [props.autofocus]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div
      className={`flex items-center justify-center ${props.marginY} sm:${props.smMarginY}`}
    >
      <form
        onSubmit={handleSearch}
        className={`relative ${props.width} sm:hidden`}
      >
        <input
          type="text"
          placeholder={props.placeholder}
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
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
