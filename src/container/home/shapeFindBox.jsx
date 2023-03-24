import React from "react";

const ShapeFindBox = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-80 sm:w-64 sm:h-60 h-80 bg-gray-200 flex flex-col">
        <div className="bg-blue-500 text-white h-10 flex items-center justify-center w-full">
          Find by shape
        </div>
        <div className="flex-1 flex items-center justify-center">
          Content goes here
        </div>
      </div>
    </div>
  );
};

export default ShapeFindBox;
