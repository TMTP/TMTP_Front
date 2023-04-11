import Layout from "@/components/layout/layout";
import SearchBar from "@/components/home/searchBar";
import { getServerSideProps } from "../api/api";
import Link from "next/link";
import Image from "next/image";

export default function SearchPage({ users, searchQuery }) {
  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(searchQuery.toLowerCase())
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
              {filteredUsers.map((user) => (
                <tr
                  key={user.login.uuid}
                  className="border-b-2 border-gray-900 text-xs text-center"
                >
                  <td className="py-2 justify-center flex sm:ml-2">
                    <Image
                      src={user.picture.large}
                      alt={user.name.first}
                      width={300}
                      height={300}
                      className="rounded-full h-16 w-16 sm:h-auto sm:w-auto mr-4"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <Link href={`/product/${user.name.last}`}>
                      {` ${user.name.first} ${user.name.last}`}
                    </Link>
                  </td>
                  <td className=" py-2">
                    {`${user.location.street.name} ${user.location.street.number}`}
                  </td>
                  <td className=" py-2">
                    {`${user.location.city}, ${user.location.state}`}
                  </td>
                  <td className=" sm:hidden  py-2">{user.location.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </main>
  );
}

export { getServerSideProps };
