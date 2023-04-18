import Layout from "@/components/layout/layout";
import { getServerSideProps } from "../api/api";

const SearchIndexPage = () => {
  return (
    <div>
      <Layout>
        <p>해당하는 정보가 없습니다.</p>
      </Layout>
    </div>
  );
};

export default SearchIndexPage;
