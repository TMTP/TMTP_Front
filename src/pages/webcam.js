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
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `photo-${Date.now()}.jpg`,
      Body: photo,
      ContentType: "image/jpg",
      ACL: "public-read",
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

  const stopCapture = () => {
    setIsCameraOpen(false);
    if (webcamRef.current) {
      webcamRef.current.stopCapture();
    }
  };
  // 스탑캡쳐에서 오류발생 ㅠ

  return (
    <>
      {!isCameraOpen && (
        <button onClick={startCapture}>
          <FaCamera size={20} />
        </button>
      )}
      {isCameraOpen && (
        <>
          <Webcam audio={false} ref={webcamRef} />
          <button onClick={capture}>캡쳐</button>
          <button onClick={stopCapture}>카메라 닫기</button>
          {photo && <Image width={500} height={500} src={photo} alt={photo} />}
          {photo && <button onClick={uploadToS3}>S3로 업로드</button>}
        </>
      )}
    </>
  );
};

export default CaptureImage;
