import { useState, useEffect } from "react";
import React from "react";
import useColorTableDetail from "../../hook/components/shapeFind/colorTable/hook";
import useShapeTableDetail from "../../hook/components/shapeFind/shapeTable/hook";
import { useRouter } from "next/router";

const ColorShapeBox = () => {
  const router = useRouter();
  //ColorTable
  const { data } = useColorTableDetail();
  const likeYellow = data.slice(1, 6).map((item) => item.name);
  const likeGreen = data.slice(6, 9).map((item) => item.name);
  const likeBlue = data.slice(9, 11).map((item) => item.name);
  const likePurple = data.slice(11, 13).map((item) => item.name);

  const [selectedColors, setSelectedColors] = useState([]);
  const [isReset, setIsReset] = useState(false);

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
  //ColorTable

  //shapeTable
  const { baseName, drug } = useShapeTableDetail();

  const [showShapeModal, setShowShapeModal] = useState(false);
  const [selectedShape, setSelectedShape] = useState("");
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");
  const [showSplitLineModal, setShowSplitLineModal] = useState(false);
  const [selectedSplitLine, setSelectedSplitLine] = useState("");

  const handleShapeClick = (shape) => {
    setSelectedShape(shape);
    setShowShapeModal(false);
  };

  const handleFormClick = (form) => {
    setSelectedForm(form);
    setShowFormModal(false);
  };

  const handleSplitLineClick = (splitLine) => {
    setSelectedSplitLine(splitLine);
    setShowSplitLineModal(false);
  };

  const modals = [
    {
      showModal: showShapeModal,
      setShowModal: setShowShapeModal,
      options: drug.shape,
      handleClick: handleShapeClick,
    },
    {
      showModal: showFormModal,
      setShowModal: setShowFormModal,
      options: drug.form,
      handleClick: handleFormClick,
    },
    {
      showModal: showSplitLineModal,
      setShowModal: setShowSplitLineModal,
      options: drug.splitLine,
      handleClick: handleSplitLineClick,
    },
  ];

  //shapeTable
  const handleReset = () => {
    setSelectedColors([]);
    setIsReset(true);
    setSelectedShape("");
    setSelectedForm("");
    setSelectedSplitLine("");
  };

  const handleSearch = () => {
    const selectedOptions = {
      selectedColors,
      selectedShape,
      selectedForm,
      selectedSplitLine,
    };
    const query = Object.entries(selectedOptions)
      .filter(([, value]) => value) // 값이 존재하는 프로퍼티만 필터링
      .map(([key, value]) => `${key}:${value}`) // 쿼리스트링 형태로 변환
      .join("+"); // 각 쿼리스트링을 "+"로 연결하여 하나의 문자열로 만듦

    // 검색 결과 페이지로 이동
    router.push(`/search/color/${query}`);
  };

  return (
    <div className="py-4 sm:pt-0 pl-3">
      <div>
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
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-8">
            {baseName.map((name, index) => (
              <button
                key={`btn-${index}`}
                className="border sm:px-1 sm:py-1 sm:text-sm border-black px-4 py-2 rounded-md hover:bg-gray-200 bg-white"
                onClick={() => {
                  if (index === 0) setShowShapeModal(true);
                  if (index === 1) setShowFormModal(true);
                  if (index === 2) setShowSplitLineModal(true);
                }}
              >
                {index === 0 && selectedShape
                  ? selectedShape
                  : index === 1 && selectedForm
                  ? selectedForm
                  : index === 2 && selectedSplitLine
                  ? selectedSplitLine
                  : name}
              </button>
            ))}

            {modals.map(
              (modal, index) =>
                modal.showModal && (
                  <div
                    key={index}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 opacity-75"></div>
                    <div className="z-10 bg-white grid grid-cols-4 border-[1px] border-black p-4 gap-1 rounded-md relative sm:text-xs">
                      {modal.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className="px-4 py-2 rounded-md hover:bg-cyan-100 bg-gray-200"
                          onClick={() => modal.handleClick(option)}
                        >
                          {option.toLowerCase()}
                        </button>
                      ))}
                      <button
                        className="absolute top-0 right-0"
                        onClick={() => modal.setShowModal(false)}
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div>
        <button
          className="border px-4 py-2 rounded-md hover:bg-gray-200 bg-white"
          onClick={handleReset}
        >
          초기화
        </button>
        <button
          className="border px-4 py-2 rounded-md hover:bg-gray-200 bg-white"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default ColorShapeBox;
