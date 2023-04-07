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
    formData.append("image", blob, filename);

    fetch(`/api/save-image`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setCapturedImage(`/webcam/${data.filename}`);
      })
      .catch((error) => {
        console.error("Error saving image:", error);
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
    <>
      {isCameraEnabled ? (
        <div className="flex justify-center items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={800}
            height={600}
            videoConstraints={videoConstraints}
          />
          <button onClick={handleCapture}>캡쳐</button>
          <button onClick={handleCameraToggle}>닫기</button>
          {/* {capturedImage && <img src={capturedImage} />} */}
        </div>
      ) : (
        <button onClick={handleCameraToggle}>카메라 활성화</button>
      )}
    </>
  );
};

export default WebCamera;
