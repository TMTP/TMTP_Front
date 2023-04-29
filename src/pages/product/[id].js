import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { fetchEpillData, fetchMedicineData } from "../api/api";
import Image from "next/image";
import useProductDetailId from "@/hook/pages/product/id/hook";

const ProductDetailPage = ({ medicineData, epillData }) => {
  const { medicineTextData, medicineProperties, pillTextData, pillProperties } =
    useProductDetailId();
  const router = useRouter();
  const { id } = router.query;

  const selectedMedicineProduct = medicineData.find(
    (product) => product.item_SEQ === id
  );
  const selectedPillsProduct = epillData.find(
    (product) => product.itemSeq === id
  );

  return (
    <Layout>
      <div className="bg-white p-6 flex flex-col">
        <div className="flex justify-center items-start mb-6">
          <div className="rounded-lg overflow-hidden shadow-md w-1/2 sm:w-96">
            <Image
              src={selectedMedicineProduct.item_IMAGE}
              alt={selectedMedicineProduct.item_IMAGE}
              width={800}
              height={1000}
              className="object-cover h-60 sm:h-96 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold text-center my-10">
              {selectedMedicineProduct.item_NAME}
            </h1>
            {selectedPillsProduct && (
              <div>
                {pillTextData.map((item, index) => (
                  <div key={index}>
                    <div>
                      <span className="font-bold text-xl">{item}:</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: selectedPillsProduct[pillProperties[item]],
                        }}
                        title={item}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {medicineTextData.map((item, index) => (
              <p key={index}>
                <span className="font-bold ">{item}: </span>
                {selectedMedicineProduct[medicineProperties[item]]}
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
    const medicineData = await fetchMedicineData();
    const epillData = await fetchEpillData();

    return {
      props: {
        medicineData,
        epillData,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        medicineData: null,
        epillData: null,
      },
    };
  }
}

export default ProductDetailPage;
