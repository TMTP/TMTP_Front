import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import Image from "next/image";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(product);

  return (
    <Layout>
      <div className="bg-white p-6 rounded-md shadow-md ">
        <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
          {product.name.first} {product.name.last}
        </h1>
        <div className="flex justify-center">
          <Image
            src={product.picture.large}
            alt={product.name.first}
            width={300}
            height={300}
            className="rounded-full h-16 w-16 sm:h-auto sm:w-auto mr-4"
          />
        </div>
        <p>Gender: {product.gender}</p>
        <p>Email: {product.email}</p>
        <p>Phone: {product.phone}</p>
        <p>
          Location: {product.location.street.name}{" "}
          {product.location.street.number}, {product.location.city},{" "}
          {product.location.state} {product.location.postcode}
        </p>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://randomuser.me/api/?seed=${params.last}`);
  const data = await res.json();

  if (!data.results) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data.results[0],
    },
  };
}

export default ProductDetailPage;
