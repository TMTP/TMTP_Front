import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "../api/api";

const ProductDetailPage = ({ medicineData }) => {
  const router = useRouter();
  const { id } = router.query;

  const selectedProduct = medicineData.items.find(
    (product) => product.ITEM_SEQ === id
  );

  return (
    <Layout>
      <div className="bg-white p-6 rounded-md shadow-md ">
        <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
          {selectedProduct.ITEM_NAME}
          {selectedProduct.ITEM_SEQ}
        </h1>
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
