import * as React from "react";
import Layout from "../../components/Layout/layout";
import ProductDetail from "../../container/product/drugDetail";

const ProductDetailPage = ({ pageContext }) => {
  return (
    <main>
      <Layout>
        <ProductDetail pageContext={pageContext} />
      </Layout>
    </main>
  );
};

export default ProductDetailPage;
