import React, { useState } from "react";
import useShapeTableDetail from "../../hook/components/shapeFind/shapeTable/hook";

const ShapeTable = () => {
  const { baseName, drug } = useShapeTableDetail();
  const [modals, setModals] = useState([
    {
      show: false,
      options: drug.shape,
      selectedOption: "",
      handleClick: setSelectedOption,
    },
    {
      show: false,
      options: drug.form,
      selectedOption: "",
      handleClick: setSelectedOption,
    },
    {
      show: false,
      options: drug.splitLine,
      selectedOption: "",
      handleClick: setSelectedOption,
    },
  ]);

  function setSelectedOption(option, index) {
    const updatedModals = [...modals];
    updatedModals[index] = {
      ...updatedModals[index],
      selectedOption: option,
      show: false,
    };
    setModals(updatedModals);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-8">
        {baseName.map((name, index) => (
          <button
            key={`btn-${index}`}
            className="border sm:px-1 sm:py-1 sm:text-sm border-black px-4 py-2 rounded-md hover:bg-gray-200 bg-white"
            onClick={() => {
              const updatedModals = [...modals];
              updatedModals[index] = {
                ...updatedModals[index],
                show: true,
              };
              setModals(updatedModals);
            }}
          >
            {modals[index].selectedOption || name}
          </button>
        ))}

        {modals.map(
          (modal, index) =>
            modal.show && (
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
                      onClick={() => modal.handleClick(option, index)}
                    >
                      {option.toLowerCase()}
                    </button>
                  ))}
                  <button
                    className="absolute top-0 right-0"
                    onClick={() => {
                      const updatedModals = [...modals];
                      updatedModals[index] = {
                        ...updatedModals[index],
                        show: false,
                      };
                      setModals(updatedModals);
                    }}
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
