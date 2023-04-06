import React, { useState } from "react";
import useShapeTableDetail from "../../hooks/components/shapeFind/shapeTable/hook";

const ShapeTable = () => {
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

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-8">
        {baseName.map((name, index) => (
          <button
            key={index}
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
          (modal) =>
            modal.showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 opacity-75"></div>
                <div className="z-10 bg-white grid grid-cols-4 border-[1px] border-black p-4 gap-1 rounded-md relative sm:text-xs">
                  {modal.options.map((option) => (
                    <button
                      key={option}
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
  );
};

export default ShapeTable;
