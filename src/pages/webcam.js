import Webcam from "react-webcam";
import AWS from "aws-sdk";
import { useRef, useState } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";

const CaptureImage = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const router = useRouter();

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  const captureAndUpload = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = dataURLtoBlob(imageSrc);
    uploadToS3(blob);
    router.push(`/camera`);
  };

  const uploadToS3 = async (photo) => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    });
    const params = {
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
      Key: `photo-${Date.now()}.jpg`,
      Body: photo,
      ContentType: "image/jpg",
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
    const videoElement = webcamRef.current.video;
    videoElement.pause();
  };

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "environment",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!isCameraOpen && (
        <button
          onClick={startCapture}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaCamera size={32} color="white" />
        </button>
      )}
      {isCameraOpen && (
        <>
          <div className="relative">
            <Webcam
              audio={false}
              ref={webcamRef}
              videoConstraints={videoConstraints}
              className="rounded-md"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-3 grid-rows-3 gap-0">
              {Array.from(Array(9).keys()).map((index) => (
                <div
                  key={index}
                  className="border border-gray-500"
                  style={{
                    gridColumn: `span 1`,
                    gridRow: `span 1`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={captureAndUpload}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              캡쳐하기
            </button>
            <button
              onClick={stopCapture}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CaptureImage;
