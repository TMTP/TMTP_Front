import Image from "next/image";
import Link from "next/link";

export default function CustomTable({ data }) {
  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-blue-200 sm:text-[8px] text-center ">
          <th className="py-2 border-2 border-black">사진</th>
          <th className="py-2 border-2 border-black">제품명</th>
          <th className="py-2 border-2 border-black">약품번호</th>
          <th className="py-2 border-2 border-black">클래스이름</th>
          <th className="sm:hidden py-2 border-2 border-black">제형</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => (
          <tr
            key={result.item_SEQ}
            className="border-2 border-gray-900 text-xs text-center font-extrabold  sm:text-xs sm:text-ellipsis"
          >
            <td className="justify-center flex sm:mt-3 border-r-2 border-black">
              <div className="relative">
                <Image
                  src={result.item_IMAGE}
                  alt={result.item_IMAGE}
                  width={100}
                  height={100}
                  className="rounded-full h-14 w-14 sm:h-14 sm:w-64 lg:m-4 xl:m-4"
                />
              </div>
            </td>
            <td className="px-3 py-2 border-r-2 border-black text-lg sm:hidden">
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

            <td className="py-2 border-r-2 border-black sm:text-xs">{`${result.item_SEQ}`}</td>
            <td className="py-2 border-r-2 border-black sm:text-xs">{`${result.class_NAME}`}</td>
            <td className=" py-2 border-r-2 border-black">
              {result.form_CODE_NAME}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
