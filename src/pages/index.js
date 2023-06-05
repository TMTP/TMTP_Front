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
import Background from "../assets/back.png";
import Image from "next/image";

export default function Home({ medicineData }) {
  const { data } = useIndexDetail();
  const options = {
    activeClass: "active",
    anchors: ["search", "shape", "compare"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 1000,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "10",
    sectionPaddingBottom: "10",
    verticalAlign: false,
    touchSensitivity: 2,
  };

  return (
    <div className="bg-[#E7E7E7]">
      <SectionsContainer {...options}>
        <Section anchors="search">
          <Header />
          <div className="sm:mt-20 md:mt-36 md:ml-10">
            <p className="xl:hidden lg:hidden text-right mr-10 text-3xl font-bold text-black">
              내가
            </p>
            <p className="xl:hidden lg:hidden text-right mr-10 text-3xl font-bold text-black">
              먹는 약이
            </p>
            <p className="xl:hidden lg:hidden text-right mr-10 text-3xl font-bold text-black">
              궁금할때
            </p>
            <Image
              src={Background}
              alt="background"
              width={600}
              height={600}
              className="xl:hidden lg:hidden"
            />
          </div>
          <div className="mt-72 sm:mt-0">
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
          <div className="flex justify-center  items-center mt-24 sm:flex-col sm:mt-0 md:flex-col">
            <div className="mr-10 bg-opacity-40 text-black sm:bg-opacity-100 p-4 rounded-lg transition ease-in duration-500 hover:text-blue-400">
              <div className="border-b-2 flex items-start border-black">
                <p className="text-5xl mb-1 text-black font-bold sm:text-3xl ">
                  {data.shapeBox.title}
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold opacity-60 hover:opacity-100 sm:text-lg ">
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
            <div className="flex justify-center items-center mt-24 pb-64 mx-20 sm:mx-0  sm:pb-48 sm:flex-col sm:mt-5 md:flex-col">
              <div className="mr-10 text-black transition ease-in duration-500 hover:text-blue-400 p-4 rounded-lg">
                <div className="border-b-2 flex items-start border-black">
                  <p className="text-5xl mb-1 text-black font-bold  sm:text-3xl">
                    {data.compareBox.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold opacity-60 hover:opacity-100 sm:text-lg">
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
