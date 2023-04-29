import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { fetchMedicineData } from "../api/api";

const CompareIndexPage = () => {
  const router = useRouter();

  return (
    <main>
      <Layout>
        <h1>하이고..</h1>
      </Layout>
    </main>
  );
};

export async function getServerSideProps() {
  try {
    const medicineData = await fetchMedicineData();
    const epillData = await fetchEpillData();

    return {
      props: {
        medicineData,
        epillData,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        medicineData: null,
        epillData: null,
      },
    };
  }
}

export default CompareIndexPage;
