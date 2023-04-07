import React, { useState } from "react";
import Webcam from "react-webcam";
import { useMediaQuery } from "react-responsive";

const WebCamera = () => {
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
    <div className="flex justify-center">
      {isCameraEnabled ? (
        <div className="flex justify-center flex-col items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={800}
            height={600}
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
        <button
          onClick={handleCameraToggle}
          className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          카메라 활성화
        </button>
      )}
    </div>
  );
};

export default WebCamera;
