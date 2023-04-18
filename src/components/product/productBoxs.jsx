import Link from "next/link";
import Image from "next/image";

export default function ProductBoxs({ medicineData }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md ">
      <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
        전체 약품에 대한 정보입니다.
      </h1>
      <table className="w-full table-auto ">
        <thead>
          <tr className="bg-blue-200 sm:text-[8px] text-center ">
            <th className="px-2 py-2  border-2 border-black">사진</th>
            <th className="px-4 py-2 border-2 border-black">제품명</th>
            <th className="px-4 py-2 border-2 border-black">회사명</th>
            <th className="px-4 py-2 border-2 border-black">제형</th>
            <th className=" sm:hidden px-4 py-2 border-2 border-black">구분</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.slice(0, 100).map((result) => (
            <tr
              key={result.item_SEQ}
              className="border-2 border-gray-900 text-xs text-center "
            >
              <td className=" justify-center  sm:mt-5  border-r-2 border-black">
                <Image
                  src={result.item_IMAGE}
                  alt={result.item_IMAGE}
                  width={300}
                  height={300}
                  className="rounded-full h-14 w-14 sm:h-auto sm:w-auto lg:m-4 xl:m-4 "
                />
              </td>
              <td className="px-3 py-2 border-r-2 border-black">
                <Link
                  href={{
                    pathname: "/product/[id]",
                    query: { id: result.item_SEQ },
                  }}
                >{` ${result.item_NAME}`}</Link>
              </td>
              <td className=" py-2 border-r-2 border-black">{`${result.drug_SHAPE}`}</td>
              <td className=" py-2 border-r-2 border-black">{`${result.form_CODE_NAME}`}</td>
              <td className=" sm:hidden  py-2 border-r-2 border-black">
                {result.item_SEQ}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
