import * as React from "react";
import { fetchMedicineData } from "../api/api";
import Layout from "@/components/layout/layout";
import ProductBoxs from "@/components/product/productBoxs";
import { usePagination } from "@/utils/pagination";

export default function ProductIndexPage({ medicineData }) {
  const { currentPage, handlePageChange, currentData, visiblePages, pages } =
    usePagination(medicineData);

  return (
    <main>
      <Layout>
        <ProductBoxs medicineData={currentData} />
        <div className="flex flex-row justify-center">
          {/* 중앙 페이지 버튼 */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`text-gray-800 mx-1 px-3 py-1 rounded-full border mb-4 ${
                currentPage === page ? "bg-red-500 text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>
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
