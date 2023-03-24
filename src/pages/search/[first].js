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
        <SearchBar />
        <SearchDrugBox searchQuery={searchQuery} />
      </Layout>
    </main>
  );
};

export default SearchPage;

<title>TMTP</title>;
