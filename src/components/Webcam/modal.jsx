export const WebCamModal = ({ children, onClose }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="flex justify-center items-center mx-10 py-10 bg-white p-4 rounded-md shadow-lg max-w-lg w-full">
        {children}
      </div>
    </div>
  );
};
