import { useState } from "react";
import React from "react";
import useSearchDrugDetail from "../../hooks/Container/Search/searchDrugBox/hook";

function CompareBox() {
  const { data } = useSearchDrugDetail();
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center h-full my-10">
      <div className="w-96 h-96 sm:w-64 sm:h-60  bg-gray-200 flex flex-col">
        <div className="bg-red-400 text-white h-10 flex items-center justify-center w-full">
          약 검색
        </div>
        <div className="bg-gray-200 p-4 rounded-lg flex-1 overflow-auto">
          <input
            type="text"
            value={query}
            placeholder="제품명, 제품코드 입력"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-400 rounded-lg py-2 px-4 mb-4"
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
                  <div key={edge.node.id} className="w-full md:w-1/2 lg:w-1/3">
                    <div className="bg-white shadow rounded-lg p-4 flex items-center">
                      <img
                        src={edge.node.picture.large}
                        alt="d"
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold">
                          {edge.node.name.first} {edge.node.name.last}
                        </div>
                        <div className="text-gray-500">
                          {edge.node.location.city},{" "}
                          {edge.node.location.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompareBox;
