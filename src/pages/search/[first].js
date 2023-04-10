import Layout from "@/components/layout/layout";
import { fetchUsers } from "../api/api";
import Link from "next/link";

export default function SearchPage({ users }) {
  return (
    <div>
      <Layout>
        <h1>Search Results</h1>
      </Layout>
    </div>
  );
}
