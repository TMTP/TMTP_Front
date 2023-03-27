import React from "react";
import ColorTable from "../../components/shapeFind/colorTable";
import ShapeTable from "../../components/shapeFind/shapeTable";
import SearchBar from "./searchBox";

const ShapeFindBox = () => {
  const handleSelectedColor = (colors) => {
    console.log(colors);
  };
  const handleShape = (shape) => {
    console.log(shape);
  };
  const handleForm = (form) => {
    console.log(form);
  };
  const handleLine = (line) => {
    console.log(line);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-96 h-96 sm:w-64 sm:h-60  bg-gray-200 flex flex-col">
        <div className="bg-blue-500 text-white h-10 flex items-center justify-center w-full">
          모양 검색
        </div>
        <div className="flex-col flex ">
          <div className="flex justify-center">
            <SearchBar
              marginY="my-2"
              width="w-full"
              autofocus={false}
              placeholder="약에 적힌 문자검색"
            />
          </div>
          <div>
            <ColorTable handleSelectedColors={handleSelectedColor} />
            <ShapeTable
              handleShape={handleShape}
              handleForm={handleForm}
              handleLine={handleLine}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeFindBox;
