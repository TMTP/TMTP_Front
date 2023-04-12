import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { getServerSideProps } from "../api/api";

const CompareIndexPage = ({ users }) => {
  const router = useRouter();
  const { id: ids } = router.query;
  const idsArray = Array.isArray(ids) ? ids : [ids]; // 쿼리 파라미터를 배열로 변환

  const selectedUsers = idsArray
    .map((id) => {
      const user = users.find((user) => user.login.uuid === id);
      if (user && user.login) {
        return user;
      }
      return null;
    })
    .filter((user) => user !== null);

  return (
    <main>
      <Layout>
        <h1>Selected Users:</h1>
        {selectedUsers.map((user) => (
          <div key={user.login.uuid}>
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </Layout>
    </main>
  );
};

export { getServerSideProps };
export default CompareIndexPage;
