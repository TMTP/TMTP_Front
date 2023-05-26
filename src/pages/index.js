import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "./api/api";
import ShapeFindBox from "@/components/shapeFind/shapeFindBox";
import CompareBox from "@/components/compare/compareBox";
import React, { useEffect, useState } from "react";
import { WebCamModal } from "@/components/Webcam/modal";
import CaptureImage from "./webcam";

export default function Home({ medicineData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsCameraOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      setIsCameraOpen(true);
    }
  }, [isModalOpen]);

  return (
    <div>
      <Layout>
        <div>
          <button onClick={handleModalOpen}>Open Webcam</button>

          {/* Modal component */}
          {isModalOpen && (
            <WebCamModal onClose={handleModalClose}>
              {isCameraOpen && <CaptureImage />}
            </WebCamModal>
          )}
        </div>
        <SearchBar
          placeholder="제품명, 코드를 입력하세요"
          width="w-1/2"
          hidden="hidden"
          autofocus={true}
          searchPath="/search"
        />

        <ShapeFindBox />
        <CompareBox medicineData={medicineData} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchMedicineData();
    return {
      props: {
        medicineData: data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        medicineData: null,
      },
    };
  }
}
