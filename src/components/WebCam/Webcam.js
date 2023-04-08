import React, { useState } from "react";
import Webcam from "react-webcam";
import { useMediaQuery } from "react-responsive";
import { FaCamera } from "react-icons/fa";

const WebCamera = (props) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const webcamRef = React.useRef(null);

  const isLargeScreen = useMediaQuery({ minDeviceWidth: 1080 });

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const formData = new FormData();
    const filename = `webcam-${Date.now()}.png`;
    const blob = new Blob([imageSrc], { type: "image/png" });
    formData.append("image", blob, `/static/${filename}`); // /static 경로 추가

    fetch(`/api/save-image`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setCapturedImage(`/webcam/${data.filename}`);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  const handleCameraToggle = () => {
    setIsCameraEnabled(!isCameraEnabled);
    if (isCameraEnabled) {
      setIsCameraEnabled(false);
    }
  };

  const videoConstraints = {
    facingMode: isLargeScreen ? "user" : { exact: "environment" },
  };

  return (
    <div className="flex justify-center my-10">
      {isCameraEnabled ? (
        <div className="flex justify-center flex-col items-center absolute">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="border-2 border-red-300 rounded-md shadow-md"
          />
          <div>
            <button
              onClick={handleCapture}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              캡쳐
            </button>
            <button
              onClick={handleCameraToggle}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              닫기
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={handleCameraToggle}
            className={`xl:${props.xlHidden} lg:${props.lgHidden} hover:bg-gray-200 text-black rounded `}
          >
            <FaCamera size={props.size} />
          </button>
        </div>
      )}
    </div>
  );
};

export default WebCamera;
