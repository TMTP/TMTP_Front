import * as React from "react";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/seo";
import DrugBox from "../../container/product/drugBox";

const ProductIndexPage = () => {
  return (
    <main>
      <Layout>
        <DrugBox />
      </Layout>
    </main>
  );
};

export default ProductIndexPage;

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

<title>TMTP|Product</title>;
