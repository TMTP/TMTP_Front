import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/Layout/layout";
import SearchBar from "../../container/home/searchBox";
import SearchDrugBox from "../../container/search/searchDrugBox";

const SearchIndexPage = () => {
  return (
    <main>
      <Layout>
        <SearchBar width="w-1/2" marginY="my-10" autofocus={true} />

        <div className="mb-[440px]">
          <SearchDrugBox />
        </div>
      </Layout>
    </main>
  );
};

export default SearchIndexPage;

export const Head = () => {
  return (
    <>
      <Seo>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
          rel="stylesheet"
        ></link>
      </Seo>
    </>
  );
};

<title>TMTP|Search</title>;
