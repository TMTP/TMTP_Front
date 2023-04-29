import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchPath, searchType } = props;

    const path =
      searchType === "shape"
        ? `${searchPath}/shape/${searchQuery}`
        : `${searchPath}/${searchQuery}`;
    router.push(path);
  };

  useEffect(() => {
    if (props.autofocus) {
      inputRef.current.focus();
    }
  }, [props.autofocus]);

  return (
    <div className="flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className={`relative ${props.width || "w-96"} ${
          props.my || "my-10"
        } sm:${props.hidden || ""}`}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={props.placeholder || "Search"}
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ref={inputRef}
        />
        <button
          type="submit"
          className="absolute -inset-y-1 right-0 flex items-center justify-center w-10 h-[48px] text-gray-500 bg-transparent hover:text-gray-700 focus:outline-none"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
