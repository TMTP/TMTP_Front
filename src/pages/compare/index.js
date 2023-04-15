import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { getServerSideProps } from "../api/api";

const CompareIndexPage = ({ users, searchQuery }) => {
  const router = useRouter();
  const uuResult = router.query.uuid || [];
  console.log(uuResult);
  const selectedUsers = users.filter((user) =>
    uuResult.includes(user.login.uuid)
  );
  console.log(selectedUsers);
  return (
    <main>
      <Layout>
        <h1>Selected Users:</h1>
        {/* {users.map((result) => (
          <p>{`${result.login.uuid}`}</p>
        ))} */}
      </Layout>
    </main>
  );
};

export { getServerSideProps };
export default CompareIndexPage;
