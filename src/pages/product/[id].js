import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "../api/api";
import Image from "next/image";
import useProductDetailId from "@/hook/pages/product/id/hook";

const ProductDetailPage = ({ medicineData }) => {
  const { data, properties } = useProductDetailId();
  const router = useRouter();
  const { id } = router.query;

  const selectedProduct = medicineData.find(
    (product) => product.item_SEQ === id
  );

  return (
    <Layout>
      <div className="bg-white p-6 flex flex-col">
        <div className="flex justify-center items-start mb-6">
          <div className="rounded-lg overflow-hidden shadow-md w-1/2 sm:w-96">
            <Image
              src={selectedProduct.item_IMAGE}
              alt={selectedProduct.item_IMAGE}
              width={800}
              height={1000}
              className="object-cover h-60 sm:h-96 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold text-center mb-2">
              {selectedProduct.item_NAME}
            </h1>
            {data.map((item, index) => (
              <p className="text-gray-600" key={index}>
                <span className="font-bold">{item}: </span>
                {selectedProduct[properties[item]]}
              </p>
            ))}
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

export default ProductDetailPage;
