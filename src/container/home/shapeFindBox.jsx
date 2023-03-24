import React from "react";
import ColorTable from "../../components/shapeFind/colorTable";
import ShapeTable from "../../components/shapeFind/shapeTable";
import SearchBar from "./searchBox";

const ShapeFindBox = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-96 h-96 sm:w-64 sm:h-60  bg-gray-200 flex flex-col">
        <div className="bg-blue-500 text-white h-10 flex items-center justify-center w-full">
          Find by shape
        </div>
        <div className="flex-col flex ">
          <div className="flex justify-center">
            <SearchBar
              marginY="my-2"
              width="w-full"
              autofocus={false}
              placeholder="모양으로 검색하세요"
            />
          </div>
          <div>
            <ColorTable />
            <ShapeTable />
          </div>
          Content goes here
        </div>
      </div>
    </div>
  );
};

export default ShapeFindBox;
