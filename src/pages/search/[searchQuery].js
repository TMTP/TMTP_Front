import Layout from "@/components/layout/layout";
import SearchBar from "@/components/home/searchBar";
import { fetchMedicineData } from "../api/api";
import CustomTable from "@/utils/table";
import { usePagination } from "@/utils/pagination";

export default function SearchPage({ medicineData, searchQuery }) {
  const filteredData = medicineData.filter(
    (item) =>
      item.item_NAME.includes(searchQuery) ||
      item.item_SEQ.toString().includes(searchQuery)
  );
  const { currentPage, handlePageChange, currentData, visiblePages, pages } =
    usePagination(filteredData);
  return (
    <main>
      <Layout>
        <SearchBar
          placeholder="이름을 입력하세요"
          width="w-1/2"
          searchPath="/search"
        />
        <div className="bg-white p-6 rounded-md ">
          <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
            {"("}
            {searchQuery}
            {")"}에 대한 정보입니다.
          </h1>
        </div>
        <div className="bg-white p-6">
          <CustomTable data={currentData} />
        </div>
        <div className="flex flex-row justify-center">
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

export async function getServerSideProps({ query }) {
  try {
    const { searchQuery } = query;
    const data = await fetchMedicineData();
    return {
      props: {
        medicineData: data,
        searchQuery: searchQuery,
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
