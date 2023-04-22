import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "../../api/api";
import Link from "next/link";
import Image from "next/image";

export default function SearchPage({ medicineData, searchQuery }) {
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
  console.log(filteredData);
  return (
    <main>
      <Layout>
        <div className="bg-white p-6 rounded-md shadow-md ">
          <table className="w-full table-auto ">
            <thead>
              <tr className="bg-blue-200 sm:text-xs text-center">
                <th className=" py-2 ">사진</th>
                <th className=" py-2 ">제품명</th>
                <th className=" py-2 ">약품번호</th>
                <th className=" py-2 ">클래스이름</th>
                <th className=" sm:hidden  py-2 ">제형</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((result) => (
                <tr
                  key={result.item_SEQ}
                  className="border-b-[1px] border-gray-900 text-xs text-center"
                >
                  <td className="py-2 justify-center flex sm:ml-2">
                    <Image
                      src={result.item_IMAGE}
                      alt={result.item_IMAGE}
                      width={300}
                      height={300}
                      className="rounded-full h-16 w-16 sm:h-auto sm:w-auto mr-4"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <Link
                      href={{
                        pathname: "/product/[id]",
                        query: { id: result.item_SEQ },
                      }}
                    >{` ${result.item_NAME}`}</Link>
                  </td>
                  <td className=" py-2">{`${result.drug_SHAPE}`}</td>
                  <td className=" py-2">{`${result.form_CODE_NAME}`}</td>
                  <td className=" sm:hidden  py-2">{result.item_SEQ}</td>
                </tr>
              ))}
            </tbody>
          </table>
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