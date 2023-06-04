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
    console.log(classWords);
    return overlappingContents.length > 0;
  };

  const isInteractionA = checkContents(medicineA, medicineB);
  const isInteractionB = checkContents(medicineB, medicineA);

  return (
    <main>
      <Layout>
        <h2 className="flex justify-center font-bold text-3xl sm:text-2xl">
          상호 복용 여부
        </h2>

        {isInteractionA || isInteractionB ? (
          <div>
            {isInteractionA && (
              <div className="mx-10" key={medicineA.item_SEQ}>
                <p className="text-3xl mb-4 text-red-500 font-bold">
                  {medicineA.item_NAME}
                </p>
                <p
                  className="mb-3 font-bold"
                  dangerouslySetInnerHTML={{
                    __html: medicineA.intrcQesitm,
                  }}
                ></p>
              </div>
            )}
            {isInteractionB && (
              <div className="mx-10" key={medicineB.item_SEQ}>
                <p className="text-3xl mb-4 text-red-500 font-bold">
                  {medicineB.item_NAME}
                </p>
                <p
                  className="mb-3 font-bold"
                  dangerouslySetInnerHTML={{
                    __html: medicineB.intrcQesitm,
                  }}
                ></p>
              </div>
            )}
          </div>
        ) : (
          <p>복용 가능</p>
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
