import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { fetchMedicineData } from "../api/api";

const CompareIndexPage = ({ medicineData }) => {
  const router = useRouter();
  const { id: ids = [] } = router.query;

  const idsArray = Array.isArray(ids) ? ids : [ids];

  const checkContents = (medicine) => {
    if (idsArray.includes(medicine.item_SEQ)) {
      const classWords = medicine.class_NAME.includes(".")
        ? medicine.class_NAME.split(".").flatMap((word) => word.split(" "))
        : [medicine.class_NAME];

      const overlappingContents = medicine.intrcQesitm
        .split(/<[^>]*>/g)
        .flatMap((str) => str.trim().split(/\s+/))
        .filter((content) =>
          classWords.some((classWord) =>
            content.toLowerCase().includes(classWord.toLowerCase())
          )
        );

      return overlappingContents.length > 0;
    }

    return false;
  };

  const medicineContents = medicineData.map((medicine) =>
    checkContents(medicine)
  );

  const availableToTake = medicineData.some((medicine) =>
    checkContents(medicine)
  );

  return (
    <main>
      <Layout>
        <h2 className="flex justify-center font-bold text-3xl">
          상호 복용 여부
        </h2>
        {availableToTake ? (
          <div>
            {medicineData.map((medicine) =>
              checkContents(medicine) ? (
                <div className="mx-10" key={medicine.item_SEQ}>
                  <p className="text-3xl mb-4 text-red-500 font-bold">
                    {medicine.item_NAME}
                  </p>
                  <p
                    className="mb-3 font-bold"
                    dangerouslySetInnerHTML={{
                      __html: medicine.intrcQesitm,
                    }}
                  ></p>
                </div>
              ) : null
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
