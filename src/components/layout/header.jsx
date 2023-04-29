import React, { useState } from "react";
import useHeaderDetail from "../../hook/components/header/hook";
import { FaSearch, FaPills } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import CaptureImage from "@/pages/webcam";

const Header = () => {
  const { data, title } = useHeaderDetail();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <FaPills size={48} />
        <Link
          className="mx-2 font-bold text-xl tracking-tight"
          href="/"
          passHref
        >
          <h2>{title}</h2>
        </Link>
        <div className=" md:text-xs">
          {data.map((data, index) => {
            return (
              <Link
                className="px-3 text-lg font-bold text-white hover:text-gray-900 sm:text-xs"
                href={data.url}
                passHref
                key={index}
              >
                {data.name}
              </Link>
            );
          })}
        </div>
        <CaptureImage />
      </div>
      <div className="flex items-center w-auto">
        <form className="flex-grow" onSubmit={handleSearch}>
          <div className="flex items-center border-b-2 border-white py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

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
