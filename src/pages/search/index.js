import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { getServerSideProps } from "../api/api";
import Link from "next/link";
import Image from "next/image";
import SearchPageBox from "@/components/search/searchPage";

const SearchIndexPage = ({ users, searchQuery }) => {
  return (
    <div>
      <SearchPageBox users={users} searchQuery={searchQuery} />
    </div>
  );
};

export { getServerSideProps };
export default SearchIndexPage;
