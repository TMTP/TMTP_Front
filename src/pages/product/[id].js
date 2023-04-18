import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "../api/api";
import Image from "next/image";

const ProductDetailPage = ({ medicineData }) => {
  const router = useRouter();
  const { id } = router.query;

  const selectedProduct = medicineData.items.find(
    (product) => product.ITEM_SEQ === id
  );

  return (
    <Layout>
      <div className="bg-white p-6 flex flex-col">
        <div className="flex justify-center items-start mb-6">
          <div className="rounded-lg overflow-hidden shadow-md w-1/2 sm:w-96">
            <Image
              src={selectedProduct.ITEM_IMAGE}
              alt={selectedProduct.ITEM_IMAGE}
              width={800}
              height={1000}
              layout="responsive"
              className="object-cover h-60 sm:h-96 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold text-center mb-2">
              {selectedProduct.ITEM_NAME}
            </h1>
            <p className="text-gray-600">
              <span className="font-bold">품목 일련번호: </span>
              {selectedProduct.ITEM_SEQ}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">업체명: </span>
              {selectedProduct.ENTP_NAME}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">품목 모양: </span>
              {selectedProduct.DRUG_SHAPE}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">품목 색상: </span>
              {selectedProduct.COLOR_CLASS1}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const data = await fetchMedicineData();
    return {
      props: {
        medicineData: data.body,
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

export default ProductDetailPage;
