import * as React from "react";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/seo";

const CompareIndexPage = () => {
  return (
    <main>
      <Layout>
        <p>It's Compare</p>
      </Layout>
    </main>
  );
};

export default CompareIndexPage;

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

<title>TMTP|Compare</title>;
