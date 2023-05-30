import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "./api/api";
import ShapeFindBox from "@/components/shapeFind/shapeFindBox";
import CompareBox from "@/components/compare/compareBox";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import Footer from "@/components/layout/footer";
import useIndexDetail from "@/hook/pages/index/hook";
import Header from "@/components/layout/header";

export default function Home({ medicineData }) {
  const { data } = useIndexDetail();
  const options = {
    activeClass: "active",
    anchors: ["search", "shape", "compare"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 1000,
    navigation: false,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "10",
    sectionPaddingBottom: "10",
    verticalAlign: false,
    touchSensitivity: 2,
  };

  return (
    <div className="bg-[#2AC1BC]">
      <SectionsContainer {...options}>
        <Section anchors="search">
          <Header />
          <div className="mt-72">
            <SearchBar
              placeholder="제품명, 코드를 입력하세요"
              width="w-2/3"
              hidden="hidden"
              height="h-20"
              autofocus={true}
              searchPath="/search"
            />
          </div>
        </Section>
        <Section anchors="shape">
          <Header />
          <div className="flex justify-center  items-center mt-24 sm:flex-col sm:mt-10 md:flex-col">
            <div className="mr-10 bg-opacity-40 sm:bg-opacity-100 p-4 rounded-lg transition ease-in duration-500 hover:text-white">
              <div className="border-b-2 flex items-start border-black">
                <p className="text-4xl font-bold sm:text-2xl ">
                  {data.shapeBox.title}
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold sm:text-lg ">
                  {data.shapeBox.description}
                </p>
              </div>
            </div>

            <div>
              <ShapeFindBox />
            </div>
          </div>
        </Section>
        <Section anchors="compare">
          <Layout>
            <div className="flex justify-center items-center mt-24 pb-64  sm:pb-48 sm:flex-col sm:mt-5 md:flex-col">
              <div className="mr-10 transition ease-in duration-500 hover:text-white p-4 rounded-lg">
                <div className="border-b-2 flex items-start border-black">
                  <p className="text-4xl font-bold  sm:text-2xl">
                    {data.compareBox.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold sm:text-lg">
                    {data.compareBox.description}
                  </p>
                </div>
              </div>

              <div>
                <CompareBox medicineData={medicineData} />
              </div>
            </div>
          </Layout>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const data = await fetchMedicineData();
    return {
      props: {
        medicineData: data,
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
