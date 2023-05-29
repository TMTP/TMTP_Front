import * as React from "react";
import Layout from "../../components/layout/layout";
import { fetchMedicineData } from "../api/api";

const WebCamIndexPage = ({ medicineData }) => {
  return (
    <main>
      <Layout>
        <h2>hi</h2>
      </Layout>
    </main>
  );
};

export async function getServerSideProps() {
  try {
    const medicineData = await fetchMedicineData();

    return {
      props: {
        medicineData,
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

export default WebCamIndexPage;
