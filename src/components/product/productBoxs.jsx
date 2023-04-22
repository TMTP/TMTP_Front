import Link from "next/link";
import Image from "next/image";
import { FaPenFancy, FaPills } from "react-icons/fa";

export default function ProductBoxs({ medicineData }) {
  return (
    <div className="bg-white p-6 rounded-md ">
      <div class="bg-blue-100 p-10 my-10 md:p-10 rounded-md relative">
        <h1 class="text-3xl flex flex-row text-center font-bold mb-16 sm:text-base sm:mb-5 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:whitespace-nowrap">
          <span className="sm:hidden">
            <FaPills size={36} />
          </span>
          <span>전체 약품에 대한 정보입니다.</span>
        </h1>
      </div>

      <table className="w-full table-auto ">
        <thead>
          <tr className="bg-blue-200 sm:text-[8px] text-center ">
            <th className=" py-2  border-2 border-black">사진</th>
            <th className=" py-2 border-2 border-black">제품명</th>
            <th className=" py-2 border-2 border-black">약품번호</th>
            <th className=" py-2 border-2 border-black">클래스이름</th>
            <th className=" sm:hidden  py-2 border-2 border-black">제형</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.map((result) => (
            <tr
              key={result.item_SEQ}
              className="border-2 border-gray-900 text-xs text-center font-extrabold"
            >
              <td className=" justify-center flex  sm:mt-3  border-r-2  border-black">
                <div className="relative">
                  <Image
                    src={result.item_IMAGE}
                    alt={result.item_IMAGE}
                    width={100}
                    height={100}
                    className="rounded-full h-14 w-14 sm:h-auto sm:w-auto lg:m-4 xl:m-4 "
                  />
                  <div className="sm:hidden w-96  opacity-0 hover:opacity-100 transition duration-500 absolute top-0 left-0  flex items-center justify-center z-10">
                    <div className="bg-gray-800 text-white px-2 py-2 rounded-md">
                      <span className="inline-block ml-2 transform text-xl">
                        <FaPenFancy />
                        {"   "}
                      </span>
                      {result.item_NAME}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-2 border-r-2 border-black text-lg sm:text-xs">
                <Link
                  href={{
                    pathname: "/product/[id]",
                    query: { id: result.item_SEQ },
                  }}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {` ${result.item_NAME}`}
                </Link>
              </td>

              <td className=" py-2 border-r-2 border-black">{`${result.item_SEQ}`}</td>
              <td className=" py-2 border-r-2 border-black">{`${result.class_NAME}`}</td>
              <td className=" sm:hidden  py-2 border-r-2 border-black">
                {result.form_CODE_NAME}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
