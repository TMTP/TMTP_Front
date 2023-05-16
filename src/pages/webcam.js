import Webcam from "react-webcam";
import AWS from "aws-sdk";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";

const CaptureImage = () => {
  const webcamRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  };

  const uploadToS3 = async () => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    });
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: `photo-${Date.now()}.png`,
      Body: photo,
      ContentType: "image/png",
    };
    try {
      await s3.upload(params).promise();
      console.log("Successfully uploaded photo to S3.");
    } catch (error) {
      console.error("Error uploading photo to S3:", error);
    }
  };

  const startCapture = () => {
    setIsCameraOpen(true);
    webcamRef.current?.startCapture();
  };

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: "10px",
    height: "100vh",
    padding: "10px",
  };

  return (
    <div>
      {!isCameraOpen && (
        <button onClick={startCapture}>
          <FaCamera size={20} />
        </button>
      )}
      {isCameraOpen && (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>캡쳐</button>
          {/* <button onClick={stopCapture}>카메라 닫기</button> */}
          {photo && <Image width={500} height={500} src={photo} alt={photo} />}
          {photo && <button onClick={uploadToS3}>S3로 업로드</button>}
        </>
      )}
    </div>
  );
};

export default CaptureImage;
