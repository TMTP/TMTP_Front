import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";

const ProductDetailPage = () => {
  const router = useRouter();
  const { last } = router.query;

  return (
    <Layout>
      <h1>제품 상세 페이지 ({last})</h1>
    </Layout>
  );
};

export default ProductDetailPage;
