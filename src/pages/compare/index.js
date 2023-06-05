import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { fetchMedicineData } from "../api/api";

const CompareIndexPage = ({ medicineData }) => {
  const router = useRouter();
  const { id: ids = [] } = router.query;

  const idsArray = Array.isArray(ids) ? ids : [ids];
  const [medicineA, medicineB] = medicineData.filter((medicine) =>
    idsArray.includes(medicine.item_SEQ)
  );

  const checkContents = (medicineA, medicineB) => {
    const classWords = medicineB.class_NAME
      .split(".")
      .flatMap((word) => word.split(" "));

    const overlappingContents = medicineA.intrcQesitm
      .split(/<[^>]*>/g)
      .flatMap((str) => str.trim().split(/\s+/))
      .filter((content) =>
        classWords.some((classWord) =>
          content.toLowerCase().includes(classWord.toLowerCase())
        )
      );

    return overlappingContents.length > 0;
  };

  const isInteractionA = checkContents(medicineA, medicineB);
  const isInteractionB = checkContents(medicineB, medicineA);

  return (
    <main>
      <Layout>
        <h2 className="flex flex-wrap  font-bold text-3xl sm:text-2xl">
          <p className="w-full text-center text-blue-400">
            {medicineA.item_NAME}
          </p>
          <p className="w-full text-center text-blue-400">
            {medicineB.item_NAME}
          </p>
          <p className="w-full text-center">상호 복용 여부</p>
        </h2>

        {isInteractionA || isInteractionB ? (
          <div>
            <p className="text-center mb-10 font-bold text-4xl text-red-500">
              선택한 두 약은 복용이 불가합니다
            </p>
            <div className="flex flex-row justify-around sm:flex-col ">
              <div
                className="rounded-2xl w-1/3 bg-white sm:w-auto border-black shadow-2xl hover:scale-110 transition-transform duration-500 mx-10 sm:mb-5"
                key={medicineA.item_SEQ}
              >
                <div>
                  <p className="text-2xl py-2 border-b-[2px] border-black text-center mb-4 text-red-500 font-bold sm:text-xl">
                    {medicineA.item_NAME}
                  </p>
                </div>
                <div>
                  <p
                    className="mx-2 my-2 font-bold sm:text-xs"
                    dangerouslySetInnerHTML={{
                      __html: medicineA.intrcQesitm,
                    }}
                  ></p>
                </div>
              </div>

              <div
                className="rounded-2xl w-1/3 bg-white sm:w-auto border-black shadow-2xl hover:scale-110 transition-transform duration-500 mx-10 sm:mb-5"
                key={medicineB.item_SEQ}
              >
                <div>
                  <p className="text-2xl py-2 border-b-2 border-black text-center mb-4 text-red-500 font-bold sm:text-xl">
                    {medicineB.item_NAME}
                  </p>
                </div>
                <div>
                  <p
                    className="mx-2 my-2 font-bold sm:text-xs"
                    dangerouslySetInnerHTML={{
                      __html: medicineB.intrcQesitm,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-2xl font-bold sm:text-base sm:mx-10">
            {medicineA.item_NAME}, {medicineB.item_NAME} 두 약은 같이{" "}
            <span className="bg-yellow-200">복용 가능합니다.</span>
          </p>
        )}
      </Layout>
    </main>
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

export default CompareIndexPage;
