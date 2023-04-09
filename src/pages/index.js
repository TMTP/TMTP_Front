import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { getStaticProps } from "./api/api";

export default function Home({ users }) {
  return (
    <div>
      <Layout>
        <SearchBar placeholder="이름을 입력하세요" width="w-1/2" />
        {users.map((user, index) => (
          <p key={index}>{user.name.last}</p>
        ))}
      </Layout>
    </div>
  );
}

export { getStaticProps };
