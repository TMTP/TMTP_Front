import { useState } from "react";
import React from "react";
import useCompareBoxDetail from "../../hooks/Container/Home/CompareBox/hook";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function CompareBox() {
  const { data } = useCompareBoxDetail();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const handleSelect = (edge) => {
    if (selected.some((item) => item.id === edge.node.id)) {
      setSelected(selected.filter((item) => item.id !== edge.node.id));
    } else {
      setSelected([...selected, edge.node]);
    }
  };
  console.log(selected);

  const handleDelete = (index) => {
    setSelected(selected.filter((_, e) => e !== index));
  };

  return (
    <div className="my-10 flex flex-col sm:mx-5">
      <div className="flex flex-row justify-center items-center h-full ">
        <div className="w-96 h-96 sm:w-60 sm:h-60  bg-gray-200 flex flex-col border-r-2 border-gray-600">
          <div className="bg-red-400 text-white h-10 flex items-center justify-center w-full">
            약 검색
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex-1 overflow-auto">
            <input
              type="text"
              value={query}
              placeholder="제품명, 제품코드 입력"
              onChange={(e) => setQuery(e.target.value)}
              className="w-full  border border-gray-400 rounded-lg py-2 px-4 mb-4 sm:placeholder:text-xs"
            />
            {query.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {data.allRandomUser.edges
                  .filter((edge) => {
                    const { name, location } = edge.node;
                    const searchString = `${name.first} ${name.last} ${location.city} ${location.country}`;
                    return searchString
                      .toLowerCase()
                      .includes(query.toLowerCase());
                  })
                  .map((edge) => (
                    <div key={edge.node.id} className="w-full sm:lg:w-1/3">
                      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between ">
                        <div className="flex items-center">
                          <img
                            src={edge.node.picture.large}
                            alt="d"
                            className="w-16 h-16 rounded-full mr-4 sm:w-8 sm:h-8"
                          />
                          <div>
                            <div className="font-bold sm:text-xs">
                              {edge.node.name.first} {edge.node.name.last}
                            </div>
                            <div className="text-gray-500 sm:text-xs">
                              {edge.node.location.city},{" "}
                              {edge.node.location.country}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end sm:ml-7 ">
                          <button
                            onClick={() => handleSelect(edge)}
                            className={
                              selected.some((item) => item.id === edge.node.id)
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
        <div className="w-96 h-96 sm:w-64 sm:h-60  bg-gray-200 flex flex-col">
          <div className="bg-red-400 text-white h-10 flex items-center justify-center w-full">
            선택한 약
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex-1 overflow-auto">
            <div className="flex flex-wrap gap-4">
              {selected.map((item, index) => (
                <div key={index} className="w-full  lg:w-1/3">
                  <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between sm:text-xs">
                    <p>
                      {item.name.first} {item.name.last}
                    </p>
                    <button
                      onClick={() => handleDelete(index)}
                      className="ml-2"
                    >
                      <FaTimesCircle color="red" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="flex justify-center items-center w-full h-full">
          <button className="bg-blue-500 py-4 px-8 sm:py-2 sm:px-4 text-white text-lg sm:text-base rounded-lg">
            결과 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompareBox;
