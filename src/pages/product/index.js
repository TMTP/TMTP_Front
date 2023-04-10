import * as React from "react";
import { getServerSideProps } from "../api/api";
import Layout from "@/components/layout/layout";
import Link from "next/link";
import Image from "next/image";

const ProductIndexPage = ({ users }) => {
  return (
    <main>
      <Layout>
        <div className="bg-white p-6 rounded-md shadow-md ">
          <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
            전체 약품에 대한 정보입니다.
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
              {users.slice(0, 30).map((result) => (
                <tr
                  key={result.login.uuid}
                  className="border-b-2 border-gray-900 text-xs text-center"
                >
                  <td className="py-2 justify-center flex sm:ml-2">
                    <Image
                      src={result.picture.large}
                      alt={result.name.first}
                      width={300}
                      height={300}
                      className="rounded-full h-16 w-16 sm:h-auto sm:w-auto mr-4"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <Link href={`/product/${result.name.last}`}>
                      {` ${result.name.first} ${result.name.last}`}
                    </Link>
                  </td>
                  <td className=" py-2">
                    {`${result.location.street.name} ${result.location.street.number}`}
                  </td>
                  <td className=" py-2">
                    {`${result.location.city}, ${result.location.state}`}
                  </td>
                  <td className=" sm:hidden  py-2">
                    {result.location.country}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </main>
  );
};

export { getServerSideProps };
export default ProductIndexPage;
