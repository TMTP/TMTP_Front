import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function CompareBox({ users }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const handleSelect = (edge) => {
    if (selected.some((item) => item.id === edge.id)) {
      setSelected(selected.filter((item) => item.id !== edge.id));
    } else {
      setSelected([...selected, edge]);
    }
  };

  const handleDelete = (index) => {
    setSelected(selected.filter((_, e) => e !== index));
  };

  const handleCompare = () => {
    const selectedIds = selected.map((item) => item.login.uuid); // 수정된 부분
    router.push(`/compare/?id=${selectedIds.join("&id=")}`);
  };

  const router = useRouter();

  return (
    <div className="my-10 flex flex-col sm:mx-5">
      <div className="flex flex-row justify-center items-center h-full  ">
        <div className="w-96 h-96 sm:w-60 sm:h-60  bg-gray-200 flex flex-col border-r-[1px] border-dashed border-gray-600  rounded-l-full">
          <div className="bg-red-400 text-white h-10 flex items-center justify-center w-full  rounded-l-xl">
            약 검색
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex-1 overflow-auto ">
            <input
              type="text"
              value={query}
              placeholder="제품명, 제품코드 입력"
              onChange={(e) => setQuery(e.target.value)}
              className="w-full  border border-gray-400 rounded-lg py-2 px-4 mb-4 sm:placeholder:text-xs"
            />
            {query.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {users
                  .filter((user) => {
                    const { name, location } = user;
                    const searchString = `${name.first} ${name.last} ${location.city} ${location.country}`;
                    return searchString
                      .toLowerCase()
                      .includes(query.toLowerCase());
                  })
                  .map((user) => (
                    <div
                      key={user.login.uuid} // 수정된 부분
                      className="w-full border-2 border-black sm:lg:w-1/3"
                    >
                      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center sm:text-xs">
                          <Image
                            src={user.picture.large} // 수정된 부분
                            alt={user.name.first} // 수정된 부분
                            width={300}
                            height={300}
                            className="w-16 h-16 rounded-full mr-4 sm:w-8 sm:h-8"
                          />
                          <div>
                            <div className="font-bold sm:text-xs">
                              {user.name.first} {user.name.last}
                            </div>
                            <div className="text-gray-500 sm:hidden">
                              {user.location.city}, {user.location.country}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end ml-2 ">
                          <button
                            onClick={() => handleSelect(user)} // 수정된 부분
                            className={
                              selected.some(
                                (item) => item.login.uuid === user.login.uuid
                              ) // 수정된 부분
                                ? " text-blue-500"
                                : "text-black"
                            }
                          >
                            <FaCheckCircle />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-96 h-96 sm:w-64 sm:h-60 bg-gray-200 flex flex-col rounded-r-full">
          <div className="bg-red-400 text-white h-10 flex items-center justify-center  rounded-r-2xl">
            선택한 약
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex-1 overflow-auto">
            <div className="flex flex-wrap gap-4">
              {selected.map((item, index) => (
                <div key={index} className="w-full lg:w-1/3">
                  <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between text-sm sm:text-xs">
                    <p>
                      {item.name.first} {item.name.last}
                    </p>
                    <button onClick={() => handleDelete(index)}>
                      <FaTimesCircle className="text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0">
            <button
              className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-lg sm:text-sm"
              onClick={handleCompare}
            >
              결과 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareBox;
