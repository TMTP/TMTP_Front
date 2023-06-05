import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "../api/api";
import Image from "next/image";
import useProductDetailId from "@/hook/pages/product/id/hook";
import { useState } from "react";

const ProductDetailPage = ({ medicineData }) => {
  const { medicineTextData, medicineProperties, pillTextData, pillProperties } =
    useProductDetailId();
  const router = useRouter();
  const { id } = router.query;

  const selectedMedicineProduct = medicineData.find(
    (product) => product.item_SEQ === id
  );

  const [selectedTab, setSelectedTab] = useState(1); // 선택된 탭의 상태를 관리하는 state 추가

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  return (
    <Layout>
      <div className="p-6 flex flex-col">
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
        <div className="flex flex-col mx-96 sm:mx-0 sm:flex-row justify-between">
          <div className="flex flex-col  mb-4">
            <h1 className="text-3xl font-bold text-center my-10">
              {selectedMedicineProduct.item_NAME}
            </h1>
            {/* 버튼 */}
            <div className="flex  justify-center mt-4 mb-10 font-bold  sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
              {[1, 2, 3, 4, 5].map((tab) => (
                <button
                  key={tab}
                  className={`w-28 h-10 text-white mr-2 rounded-xl sm:mb-1 md:mb-2 ${
                    selectedTab === tab ? "bg-blue-400" : "bg-gray-400"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab === 1 && "품목 정보"}
                  {tab === 2 && "약품 효능"}
                  {tab === 3 && "주의 사항"}
                  {tab === 4 && "약품 부작용"}
                  {tab === 5 && "약품 보관법"}
                </button>
              ))}
            </div>
            {/* 버튼 */}
            {/* 내용물 */}
            <div className="flex  sm:text-sm">
              <div className=" w-full">
                {/* 버튼 클릭에 따라 해당 항목을 보여줌 */}
                {selectedTab === 1 && (
                  <div>
                    {medicineTextData.map((item, index) => (
                      <p key={index}>
                        <span className="font-bold mr-3 text-blue-700">
                          {item}:
                        </span>
                        <span className="inline-flex justify-end">
                          {selectedMedicineProduct[medicineProperties[item]]}
                        </span>
                      </p>
                    ))}
                  </div>
                )}
                {selectedTab === 2 && (
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedMedicineProduct[pillProperties["약품 효능"]],
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedMedicineProduct[
                            pillProperties["약품 사용법"]
                          ],
                      }}
                    />
                  </div>
                )}
                {/* 추가된 탭 버튼 */}
                {selectedTab === 3 && (
                  <div>
                    {/* "주의 사항" 내용을 보여줌 */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedMedicineProduct[pillProperties["주의 사항"]],
                      }}
                    />
                  </div>
                )}
                {selectedTab === 4 && (
                  <div>
                    {/* "약품 부작용" 내용을 보여줌 */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedMedicineProduct[
                            pillProperties["약품 부작용"]
                          ],
                      }}
                    />
                  </div>
                )}
                {selectedTab === 5 && (
                  <div>
                    {/* "약품 보관법" 내용을 보여줌 */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedMedicineProduct[
                            pillProperties["약품 보관법"]
                          ],
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* 내용물 */}
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
