import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function CompareBox({ medicineData }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const handleSelect = (edge) => {
    if (selected.some((item) => item.item_SEQ === edge.item_SEQ)) {
      setSelected(selected.filter((item) => item.item_SEQ !== edge.item_SEQ));
    } else {
      setSelected([...selected, edge]);
    }
  };

  const handleDelete = (index) => {
    setSelected(selected.filter((_, e) => e !== index));
  };

  const handleCompare = () => {
    const selectedIds = selected.map((item) => item.item_SEQ);
    router.push(`/compare/?id=${selectedIds.join("&id=")}`);
  };

  const router = useRouter();

  return (
    <div className="my-10 flex flex-col sm:w-96">
      <div className="flex flex-row justify-center items-center h-full  ">
        <div className="w-96 h-96 sm:w-48 sm:h-60 bg-gray-200 flex flex-col border-r-[1px] border-dashed border-gray-600  rounded-l-full">
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
                {medicineData
                  .filter((medicine) => {
                    const searchString = `${medicine.item_SEQ} ${medicine.item_NAME} `;
                    return searchString
                      .toLowerCase()
                      .includes(query.toLowerCase());
                  })
                  .map((medicine) => (
                    <div
                      key={medicine.item_SEQ}
                      className="w-full border-2 border-black sm:lg:w-1/3"
                    >
                      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between ">
                        <div className="flex items-center sm:text-xs text-ellipsis overflow-hidden">
                          <Image
                            src={medicine.item_IMAGE}
                            alt={medicine.item_IMAGE}
                            width={300}
                            height={300}
                            className="w-16 h-16 rounded-full mr-4 sm:w-8 sm:h-8"
                          />
                          <div>
                            <div className="font-bold sm:text-xs ">
                              {medicine.item_NAME}
                            </div>
                            <div className="text-gray-500 sm:hidden">
                              {medicine.item_SEQ}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end ml-2 ">
                          <button
                            onClick={() => handleSelect(medicine)} // 수정된 부분
                            className={
                              selected.some(
                                (item) => item.item_SEQ === medicine.item_SEQ
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
        <div className="w-96 h-96 sm:w-48 sm:h-60 bg-gray-200 flex flex-col rounded-r-full">
          <div className="bg-red-400 text-white h-10 flex items-center justify-center  rounded-r-2xl">
            선택한 약
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex-1 overflow-auto">
            <div className="flex flex-wrap gap-4">
              {selected.map((item, index) => (
                <div key={index} className="w-full lg:w-1/3">
                  <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between text-sm sm:text-xs">
                    <p>{item.item_NAME}</p>
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
