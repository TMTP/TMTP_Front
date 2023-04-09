import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";

function Home() {
  return (
    <div>
      <Layout>
        <SearchBar placeholder="이름을 입력하세요" width="w-1/2" />
        <h1>Hello Next.js</h1>
      </Layout>
    </div>
  );
}

export default Home;
