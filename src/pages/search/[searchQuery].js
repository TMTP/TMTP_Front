import Layout from "@/components/layout/layout";
import SearchBar from "@/components/home/searchBar";
import { getServerSideProps } from "../api/api";

export default function SearchPage({ users, searchQuery }) {
  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <main>
      <Layout>
        <SearchBar />
        <h1>Search For {searchQuery}</h1>
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.login.uuid}>
              {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      </Layout>
    </main>
  );
}

export { getServerSideProps };
