import React, { useState } from "react";
import { navigate } from "gatsby";

const ShapeFindBox = () => {
  return (
    <div className="w-80 h-80 bg-gray-200 flex flex-col">
      <div className="bg-blue-500 text-white h-10 flex items-center justify-center w-full">
        모양으로 찾기
      </div>
      <div className="flex-1 flex items-center justify-center">
        Content goes here
      </div>
    </div>
  );
};

export default ShapeFindBox;
