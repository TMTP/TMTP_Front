import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { getServerSideProps } from "./api/api";
import ShapeFindBox from "@/components/shapeFind/shapeFindBox";
import CompareBox from "@/components/compare/compareBox";

export default function Home({ users }) {
  return (
    <div>
      <Layout>
        <SearchBar placeholder="이름을 입력하세요" width="w-1/2" />
        <ShapeFindBox />
        <CompareBox users={users} />
      </Layout>
    </div>
  );
}

export { getServerSideProps };
