import React, { useState } from "react";
import { navigate } from "gatsby";

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
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M18.601,17.003l-4.301-4.301c1.101-1.401,1.801-3.201,1.801-5.201c0-4.401-3.601-8-8-8C3.599,0.501,0,4.101,0,8.501s3.599,8,8,8c2,0,3.801-0.7,5.201-1.801l4.301,4.301c0.299,0.299,0.801,0.299,1.1,0l1.5-1.5C18.899,17.803,18.899,17.303,18.601,17.003zM8,13.5C4.4,13.5,1.5,10.6,1.5,7s2.9-6.5,6.5-6.5s6.5,2.9,6.5,6.5S11.6,13.5,8,13.5z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
