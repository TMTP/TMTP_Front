import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { fetchEpillData, fetchMedicineData } from "../api/api";
import Image from "next/image";
import useProductDetailId from "@/hook/pages/product/id/hook";

const ProductDetailPage = ({ medicineData }) => {
  const { medicineTextData, medicineProperties, pillTextData, pillProperties } =
    useProductDetailId();
  const router = useRouter();
  const { id } = router.query;

  const selectedMedicineProduct = medicineData.find(
    (product) => product.item_SEQ === id
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
              className="object-cover h-60 sm:h-48 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col mb-4">
            <h1 className="text-3xl font-bold text-center my-10">
              {selectedMedicineProduct.item_NAME}
            </h1>
            <div className="flex sm:text-sm">
              <div className="w-1/2">
                {selectedMedicineProduct && (
                  <div>
                    {pillTextData.map((item, index) => (
                      <div key={index}>
                        <div>
                          <span className="font-bold text-xl">
                            {index + 1}.{item}
                          </span>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                selectedMedicineProduct[pillProperties[item]],
                            }}
                            title={item}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-1/2">
                {medicineTextData.map((item, index) => (
                  <p key={index}>
                    <span className="font-bold mr-3">
                      {pillTextData.length + index + 1}. {item} :
                    </span>
                    <span className="inline-flex justify-end">
                      {selectedMedicineProduct[medicineProperties[item]]}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const medicineData = await fetchMedicineData();

    return {
      props: {
        medicineData,
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
