import React, { useState } from "react";
import Webcam from "react-webcam";

const WebCamera = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const webcamRef = React.useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleCameraToggle = () => {
    setIsCameraEnabled(!isCameraEnabled);
  };

  return (
    <>
      {isCameraEnabled ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: this.state.isFacingModeUser ? "user" : "environment",
            }}
          />
          <button onClick={handleCapture}>캡쳐</button>
          {capturedImage && <img src={capturedImage} />}
        </>
      ) : (
        <button onClick={handleCameraToggle}>카메라 활성화</button>
      )}
    </>
  );
};

export default WebCamera;
