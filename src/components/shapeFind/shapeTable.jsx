import React, { useState } from "react";

const ShapeTable = () => {
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

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-8">
        <button
          className="border border-black px-4 py-2 rounded-md hover:bg-gray-200"
          onClick={() => setShowShapeModal(true)}
        >
          {selectedShape ? selectedShape : "모양 선택"}
        </button>
        <button
          className="border border-black px-4 py-2 rounded-md hover:bg-gray-200"
          onClick={() => setShowFormModal(true)}
        >
          {selectedForm ? selectedForm : "제형 선택"}
        </button>
        <button
          className="border border-black px-4 py-2 rounded-md hover:bg-gray-200"
          onClick={() => setShowSplitLineModal(true)}
        >
          {selectedSplitLine ? selectedSplitLine : "분할선 선택"}
        </button>
        {showShapeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-75"></div>
            <div className="z-10 bg-white p-4 rounded-md">
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleShapeClick("원형")}
              >
                원형
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleShapeClick("타원형")}
              >
                타원형
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleShapeClick("장방형")}
              >
                장방형
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleShapeClick("반원형")}
              >
                반원형
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => setShowShapeModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {showFormModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-75"></div>
            <div className="z-10 bg-white p-4 rounded-md">
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleFormClick("정제")}
              >
                정제
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleFormClick("경질캡슐")}
              >
                경질캡슐
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleFormClick("연질캡슐")}
              >
                연질캡슐
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => setShowFormModal(false)}
              >
                닫기
              </button>
            </div>
          </div>
        )}
        {showSplitLineModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 opacity-75"></div>
            <div className="z-10 bg-white p-4 rounded-md">
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleSplitLineClick("없음")}
              >
                없음
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleSplitLineClick("+")}
              >
                +
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => handleSplitLineClick("-")}
              >
                -
              </button>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-200"
                onClick={() => setShowSplitLineModal(false)}
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShapeTable;
