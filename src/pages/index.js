import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "./api/api";
import ShapeFindBox from "@/components/shapeFind/shapeFindBox";
import CompareBox from "@/components/compare/compareBox";
import React from "react";

export default function Home({ medicineData }) {
  return (
    <div className="bg-[#2AC1BC]">
      <Layout>
        <SearchBar
          placeholder="제품명, 코드를 입력하세요"
          width="w-1/2"
          hidden="hidden"
          autofocus={true}
          searchPath="/search"
        />

        <ShapeFindBox />
        <CompareBox medicineData={medicineData} />
      </Layout>
    </div>
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
