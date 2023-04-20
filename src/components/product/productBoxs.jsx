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
            <th className=" py-2  border-2 border-black">사진</th>
            <th className=" py-2 border-2 border-black">제품명</th>
            <th className=" py-2 border-2 border-black">약품번호</th>
            <th className=" py-2 border-2 border-black">클래스이름</th>
            <th className=" sm:hidden  py-2 border-2 border-black">제형</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.slice(0, 100).map((result) => (
            <tr
              key={result.item_SEQ}
              className="border-2 border-gray-900 text-xs text-center font-extrabold"
            >
              <td className=" justify-center  sm:mt-5  border-r-2 border-black">
                <Image
                  src={result.item_IMAGE}
                  alt={result.item_IMAGE}
                  width={100}
                  height={100}
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
