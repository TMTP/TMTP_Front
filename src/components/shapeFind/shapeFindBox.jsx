import React from "react";
import SearchBar from "../../components/home/searchBar";
import ColorShapeBox from "./colorShapeBox";

const ShapeFindBox = () => {
  return (
    <div className="flex flex-col items-center h-full my-10">
      <div className="w-[600px] h-[600px] sm:w-80 sm:h-80 bg-gray-200 flex flex-col rounded-3xl shadow-xl hover:scale-110 transition-transform duration-500">
        <div className="bg-blue-500 text-white h-10 flex items-center justify-center w-full rounded-xl">
          모양 검색
        </div>
        <div className="flex-col flex ">
          <div className="flex justify-center">
            <SearchBar
              my="my-3"
              width="w-full"
              height="h-14"
              autofocus={false}
              placeholder="약에 적힌 문자검색"
              hidden="hidden"
              searchPath="/search"
              searchType="shape"
            />
          </div>
          <div>
            <ColorShapeBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeFindBox;
