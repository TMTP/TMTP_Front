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

      console.log(classWords);
      console.log(medicine.intrcQesitm);

      const overlappingContents = medicine.intrcQesitm
        .split(/<[^>]*>/g)
        .flatMap((str) => str.trim().split(/\s+/))
        .filter((content) =>
          classWords.some((classWord) =>
            content.toLowerCase().includes(classWord.toLowerCase())
          )
        );
      console.log(overlappingContents);
    }

    return null;
  };

  const medicineContents = medicineData.map((medicine) =>
    checkContents(medicine)
  );

  const availableToTake =
    medicineContents.filter((content) => content !== null).length > 0;

  return (
    <main>
      <Layout>
        <h1>Compare Medicines</h1>

        {availableToTake ? (
          <div>
            <h2>Overlapping Medicines</h2>
            {medicineContents}
          </div>
        ) : (
          <p>Available to take!</p>
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
