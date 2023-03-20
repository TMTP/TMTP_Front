import * as React from "react";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/seo";
import SearchDrugBox from "../../container/search/searchDrugBox";

const SearchIndexPage = ({ location }) => {
  const searchQuery = location.pathname
    .replace("/search/", "")
    .replace(/\/$/, "");
  return (
    <main>
      <Layout>
        <SearchDrugBox searchQuery={searchQuery} />
      </Layout>
    </main>
  );
};

export default SearchIndexPage;

<title>TMTP</title>;