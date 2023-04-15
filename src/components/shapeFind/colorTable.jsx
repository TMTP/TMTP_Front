import { useState, useEffect } from "react";
import React from "react";
import useColorTableDetail from "../../hook/components/shapeFind/colorTable/hook";

const ColorTable = () => {
  const { data } = useColorTableDetail();
  const likeYellow = data.slice(1, 6).map((item) => item.name);
  const likeGreen = data.slice(6, 9).map((item) => item.name);
  const likeBlue = data.slice(9, 11).map((item) => item.name);
  const likePurple = data.slice(11, 13).map((item) => item.name);

  const [selectedColors, setSelectedColors] = useState([]);
  const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    setSelectedColors([]);
    setIsReset(true);
  };
  console.log(selectedColors);

  const toggleColor = (color) => {
    const index = selectedColors.indexOf(color);
    if (index !== -1) {
      setSelectedColors((prevColors) => prevColors.filter((c) => c !== color));
    } else {
      setSelectedColors((prevColors) => {
        const newColors = [...prevColors, color];
        if (likeYellow.includes(color)) {
          const colorGroup = likeYellow;
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        }
        if (likeGreen.includes(color)) {
          const colorGroup = likeGreen;
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        }
        if (likeBlue.includes(color)) {
          const colorGroup = likeBlue;
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        }
        if (likePurple.includes(color)) {
          const colorGroup = likePurple;
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        }
        return newColors;
      });
    }
  };

  return (
    <div className="py-4 sm:pt-0 pl-3">
      <ul className="flex flex-wrap ">
        {data.map((color) => (
          <li
            key={color.name}
            className={`w-1/4 md:w-1/4 mb-2 md:mb-0 sm:mb-0  ${
              selectedColors.includes(color.name) && color.colorClass
            }`}
            onClick={() => toggleColor(color.name)}
          >
            <a className="cursor-pointer  flex items-center ">
              <span
                className={`w-4 h-4 sm:w-3 sm:h-3 sm:text-xs rounded-full border border-gray-400 mr-2 ${color.colorClass}`}
              ></span>
              {color.name}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="border px-4 py-2 rounded-md hover:bg-gray-200 bg-white"
        onClick={handleReset}
      >
        색상 초기화
      </button>
    </div>
  );
};

export default ColorTable;
