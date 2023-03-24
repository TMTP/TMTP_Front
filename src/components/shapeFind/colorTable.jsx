import { useState } from "react";
import React from "react";
import useColorTableDetail from "../../hooks/components/shapeFind/colorTable/hook";

const ColorTable = () => {
  const { data } = useColorTableDetail();
  const likeYellow = data.slice(1, 6).map((item) => item.name);
  const likeGreen = data.slice(6, 9).map((item) => item.name);
  const likeBlue = data.slice(9, 11).map((item) => item.name);
  const likePurple = data.slice(11, 13).map((item) => item.name);
  console.log(likeBlue);

  const [selectedColors, setSelectedColors] = useState([]);
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
        } else if (likeGreen.includes(color)) {
          const colorGroup = likeGreen;
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        } else if (likeBlue.includes(color)) {
          const colorGroup = likeBlue;
          colorGroup.forEach((c) => {
            if (c !== color && !newColors.includes(c)) {
              newColors.push(c);
            }
          });
        } else if (likePurple.includes(color)) {
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
    <div className="py-4 pl-3">
      <ul className="flex flex-wrap">
        {data.map((color) => (
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

export default ColorTable;