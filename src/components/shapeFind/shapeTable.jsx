import { useState } from "react";
import React from "react";

const COLORS = [
  { name: "하양", colorClass: "bg-white" },
  { name: "노랑", colorClass: "bg-yellow-400" },
  { name: "주황", colorClass: "bg-orange-400" },
  { name: "분홍", colorClass: "bg-pink-400" },
  { name: "빨강", colorClass: "bg-red-500" },
  { name: "갈색", colorClass: "bg-red-700" },
  { name: "연두", colorClass: "bg-green-200" },
  { name: "초록", colorClass: "bg-green-600" },
  { name: "청록", colorClass: "bg-cyan-800" },
  { name: "파랑", colorClass: "bg-blue-500" },
  { name: "남색", colorClass: "bg-blue-800" },
  { name: "자주", colorClass: "bg-purple-800" },
  { name: "보라", colorClass: "bg-purple-600" },
  { name: "회색", colorClass: "bg-gray-500" },
  { name: "검정", colorClass: "bg-black" },
  { name: "투명", colorClass: "bg-white-500" },
];

const ShapeTable = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleColor = (color) => {
    const index = selectedColors.indexOf(color);
    if (index !== -1) {
      setSelectedColors((prevColors) => prevColors.filter((c) => c !== color));
    } else {
      setSelectedColors((prevColors) => {
        const newColors = [...prevColors, color];
        if (["노랑", "주황", "분홍", "빨강", "갈색"].includes(color)) {
          const colorGroup = ["노랑", "주황", "분홍", "빨강", "갈색"];
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        } else if (["연두", "초록", "청록"].includes(color)) {
          const colorGroup = ["연두", "초록", "청록"];
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        } else if (["파랑", "남색"].includes(color)) {
          const colorGroup = ["파랑", "남색"];
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        } else if (["자주", "보라"].includes(color)) {
          const colorGroup = ["자주", "보라"];
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
    <div className="py-4">
      <ul className="flex flex-wrap">
        {COLORS.map((color) => (
          <li
            key={color.name}
            className={`w-1/4 md:w-1/4 mb-2 md:mb-0 ${
              selectedColors.includes(color.name) && color.colorClass
            }`}
            onClick={() => toggleColor(color.name)}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter" || e.key === " ") {
            //     toggleColor(color.name);
            //   }
            // }}
            // tabIndex="0"
          >
            <a className="cursor-pointer flex items-center">
              <span
                className={`w-4 h-4 rounded-full border border-gray-400 mr-2 ${color.colorClass}`}
              ></span>
              {color.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShapeTable;
