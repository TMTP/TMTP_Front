import Layout from "@/components/layout/layout";
import SearchBar from "@/components/home/searchBar";
import { fetchMedicineData } from "../api/api";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchPage({ medicineData, searchQuery }) {
  const filteredData = medicineData.items.filter(
    (item) =>
      item.ITEM_NAME.includes(searchQuery) ||
      item.ITEM_SEQ.toString().includes(searchQuery)
  );

  return (
    <main>
      <Layout>
        <SearchBar placeholder="이름을 입력하세요" width="w-1/2" />
        <div className="bg-white p-6 rounded-md shadow-md ">
          <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
            {searchQuery}에 대한 정보입니다.
          </h1>

          <table className="w-full table-auto ">
            <thead>
              <tr className="bg-blue-200 sm:text-xs text-center">
                <th className="px-2 py-2">사진</th>
                <th className="px-4 py-2">제품명</th>
                <th className="px-4 py-2">회사명</th>
                <th className="px-4 py-2">제형</th>
                <th className=" sm:hidden px-4 py-2">구분</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((result) => (
                <tr
                  key={result.ITEM_SEQ}
                  className="border-b-[1px] border-gray-900 text-xs text-center"
                >
                  <td className="py-2 justify-center flex sm:ml-2">
                    <Image
                      src={result.ITEM_IMAGE}
                      alt={result.ITEM_IMAGE}
                      width={300}
                      height={300}
                      className="rounded-full h-16 w-16 sm:h-auto sm:w-auto mr-4"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <Link
                      href={{
                        pathname: "/product/[id]",
                        query: { id: result.ITEM_SEQ },
                      }}
                    >{` ${result.ITEM_NAME}`}</Link>
                  </td>
                  <td className=" py-2">{`${result.ENTP_NAME}`}</td>
                  <td className=" py-2">{`${result.CHART}`}</td>
                  <td className=" sm:hidden  py-2">{result.ITEM_SEQ}</td>
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
        medicineData: data.body,
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
