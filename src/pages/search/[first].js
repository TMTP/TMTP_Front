import * as React from "react";
import Layout from "../../components/Layout/layout";
import SearchDrugBox from "../../container/search/searchDrugBox";
import SearchBar from "../../container/home/searchBox";

const SearchPage = ({ location }) => {
  const searchQuery = location.pathname
    .replace("/search/", "")
    .replace(/\/$/, "");
  return (
    <main>
      <Layout>
        <SearchBar width="w-1/2" marginY="my-10" autofocus={true} />
        <SearchDrugBox searchQuery={searchQuery} />
      </Layout>
    </main>
  );
};

export default SearchPage;

<title>TMTP</title>;
