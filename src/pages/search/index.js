import * as React from "react";
import Layout from "../../components/Layout/layout";
import PageMeta from "../../components/PageMeta";

const SearchIndexPage = () => {
  return (
    <main>
      <Layout>hi im search</Layout>
    </main>
  );
};

export default SearchIndexPage;

export const Head = () => {
  return (
    <>
      <PageMeta title="약품정보" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
};
