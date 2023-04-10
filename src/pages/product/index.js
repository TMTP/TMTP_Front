import * as React from "react";
import { getServerSideProps } from "../api/api";
import Layout from "@/components/layout/layout";
import Link from "next/link";
import Image from "next/image";
import ProductBoxs from "@/components/product/productBoxs";

export default function ProductIndexPage({ users }) {
  return (
    <main>
      <Layout>
        <ProductBoxs users={users} />
      </Layout>
    </main>
  );
}

export { getServerSideProps };
