import React from "react";
import ColorTable from "../../components/shapeFind/colorTable";
import ShapeTable from "../../components/shapeFind/shapeTable";
import SearchBar from "../../components/home/searchBar";

const ShapeFindBox = () => {
  // const handleSelectedColor = (colors) => {
  //   console.log(colors);
  // };

  // const handleReset = () => {
  //   handleSelectedColor([]);
  // };

  return (
    <div className="flex flex-col items-center h-full my-10">
      <div className="w-96 h-96 sm:w-64 sm:h-60 bg-gray-200 flex flex-col rounded-3xl">
        <div className="bg-blue-500 text-white h-10 flex items-center justify-center w-full rounded-xl">
          모양 검색
        </div>
        <div className="flex-col flex ">
          <div className="flex justify-center">
            <SearchBar
              my="my-3"
              width="w-full"
              autofocus={false}
              placeholder="약에 적힌 문자검색"
              hidden="hidden"
              searchPath="/search"
              searchType="shape"
            />
          </div>
          <div>
            {/* <ColorTable handleSelectedColors={handleSelectedColor} /> */}
            <ColorTable />
            <ShapeTable />
          </div>
          {/* <button onClick={handleReset}>초기화</button> */}
        </div>
      </div>
    </div>
  );
};

export default ShapeFindBox;
