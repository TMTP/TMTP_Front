import * as React from "react";
import Layout from "../../components/Layout/layout";
import useDrugBoxDetailDetail from "../../hooks/Container/Product/drugDetail/hook";

const ProductDetailPage = ({ params }) => {
  const { last } = params;
  const { data } = useDrugBoxDetailDetail(last);
  return (
    <main>
      <Layout>
        <div>
          {data.allRandomUser.edges.slice(0, 30).map(({ node }) => (
            <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-2 border-[2px] border-black bg-gray-100">
              <div className="flex items-center mb-4 sm:mb-0 sm:mr-8 sm:w-1/2  w-full">
                <div className="flex items-center mr-4 flex-shrink-0">
                  <img
                    src={node.picture.large}
                    alt={node.name.first}
                    className="rounded-full h-16 w-16 sm:h-10 sm:w-10 mr-4 border-[2px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default ProductDetailPage;
