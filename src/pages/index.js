import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "./api/api";
import ShapeFindBox from "@/components/shapeFind/shapeFindBox";
import CompareBox from "@/components/compare/compareBox";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";

export default function Home({ medicineData }) {
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
      <Layout>
        <SectionsContainer {...options}>
          <Section anchors="search">
            <p>searchBar입니다. 설명설명설명</p>
            <SearchBar
              placeholder="제품명, 코드를 입력하세요"
              width="w-2/3"
              hidden="hidden"
              height="h-20"
              autofocus={true}
              searchPath="/search"
            />
          </Section>
          <Section anchors="shape">
            <p>ShapeFindBox. 설명설명설명</p>
            <div className="flex justify-center items-center">
              <ShapeFindBox />
            </div>
          </Section>
          <Section anchors="compare">
            <p>CompareBox. 설명설명설명</p>
            <CompareBox medicineData={medicineData} />
          </Section>
        </SectionsContainer>
      </Layout>
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
