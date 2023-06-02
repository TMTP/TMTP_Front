import Layout from "@/components/layout/layout";
import SearchBar from "@/components/home/searchBar";
import { fetchMedicineData } from "../api/api";
import { usePagination } from "@/utils/pagination";
import MainSearch from "@/components/search/mainSearch";

export default function MainSearchPage({ medicineData, searchQuery }) {
  const { currentPage, handlePageChange, currentData, visiblePages, pages } =
    usePagination(
      medicineData.filter(
        (item) =>
          item.item_NAME.includes(searchQuery) ||
          item.item_SEQ.toString().includes(searchQuery)
      )
    );
  const noResults = currentData.length === 0;
  return (
    <main>
      <Layout>
        <SearchBar
          placeholder="이름을 입력하세요"
          width="w-2/3"
          hidden="hidden"
          height="h-20"
          searchPath="/search"
        />
        {noResults ? (
          <div>
            <h2 className="text-center text-7xl sm:text-2xl font-bold">
              검색한 내용이 없습니다.
            </h2>
          </div>
        ) : (
          <div>
            <MainSearch medicineData={currentData} searchQuery={searchQuery} />
          </div>
        )}

        {!noResults && (
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
        )}
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
