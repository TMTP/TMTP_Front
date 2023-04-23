import Layout from "@/components/layout/layout";
import SearchBar from "@/components/home/searchBar";
import { fetchMedicineData } from "../../api/api";
import CustomTable from "@/utils/table";
import { usePagination } from "@/utils/pagination";

export default function ShapeSearchPage({ medicineData, searchQuery }) {
  const filteredData = medicineData.filter(
    (item) =>
      item.print_FRONT
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.print_BACK
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
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
        <div className="bg-white p-6 rounded-md shadow-md ">
          <CustomTable data={currentData} />
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
