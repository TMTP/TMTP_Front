import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { fetchMedicineData } from "../api/api";

const CompareIndexPage = ({ medicineData, searchQuery }) => {
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
      </Layout>
    </main>
  );
};

export async function getServerSideProps() {
  try {
    const data = await fetchMedicineData();
    return {
      props: {
        medicineData: data.body,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        medicineData: null,
      },
    };
  }
}

export default CompareIndexPage;
