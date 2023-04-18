import * as React from "react";
import { fetchMedicineData } from "../api/api";
import Layout from "@/components/layout/layout";
import ProductBoxs from "@/components/product/productBoxs";

export default function ProductIndexPage({ medicineData }) {
  return (
    <main>
      <Layout>
        <ProductBoxs medicineData={medicineData} />
      </Layout>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchMedicineData();
    return {
      props: {
        medicineData: data,
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
