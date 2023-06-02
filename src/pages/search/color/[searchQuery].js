import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "../../api/api";
import CustomTable from "@/utils/table";
import { usePagination } from "@/utils/pagination";
import useSearchColorDetail from "@/hook/pages/search/color/[searchQuery]/hook";

export default function ColorSearchPage({ medicineData, searchQuery }) {
  const { data } = useSearchColorDetail();
  const selectedOptions = searchQuery.split("+");
  const [selectedColors, selectedShape, selectedForm, selectedSplitLine] =
    selectedOptions.map((option) => option.split(":")[1]);

  const filteredData = medicineData.filter((item) => {
    let isMatched = false;

    if (selectedColors) {
      const colors = selectedColors.split(",");
      isMatched = colors.some((color) =>
        item.color_CLASS1.toString().toLowerCase().includes(color.toLowerCase())
      );
    }

    if (!selectedColors || (isMatched && selectedShape)) {
      if (selectedShape) {
        isMatched = item.drug_SHAPE
          .toString()
          .toLowerCase()
          .includes(selectedShape.toLowerCase());
      }
    }

    if (!selectedColors || (isMatched && selectedForm)) {
      if (selectedForm) {
        isMatched = item.form_CODE_NAME
          .toString()
          .toLowerCase()
          .includes(selectedForm.toLowerCase());
      }
    }

    if (!selectedColors || (isMatched && selectedSplitLine)) {
      if (selectedSplitLine) {
        isMatched =
          item.line_FRONT.toString().toLowerCase() ===
            selectedSplitLine.toLowerCase() ||
          item.line_BACK.toString().toLowerCase() ===
            selectedSplitLine.toLowerCase();
      }
    }

    return isMatched;
  });

  const { currentPage, handlePageChange, currentData, visiblePages, pages } =
    usePagination(filteredData);

  return (
    <main>
      <Layout>
        <div className="text-4xl my-10 text-center sm:text-xl sm:my-5">
          {currentData.length > 0 && (
            <div className="my-0">
              <h2>
                {selectedColors},{selectedShape},{selectedForm},(
                {selectedSplitLine}) 에 대한
              </h2>
              <br />
              <h2>{data.title}</h2>
            </div>
          )}
        </div>
        {currentData.length > 0 && (
          <div className="bg-white p-6 rounded-md">
            <CustomTable data={currentData} />
          </div>
        )}
        {currentData.length === 0 && (
          <div className="mb-10 text-center">
            <h3 className="text-6xl sm:text-2xl">{data.untitle}</h3>
          </div>
        )}
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
