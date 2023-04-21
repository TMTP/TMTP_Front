import SearchBar from "@/components/home/searchBar";
import Layout from "@/components/layout/layout";
import { fetchMedicineData } from "./api/api";
import ShapeFindBox from "@/components/shapeFind/shapeFindBox";
import CompareBox from "@/components/compare/compareBox";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home({ medicineData }) {
  return (
    <ReactFullpage
      // options

      scrollingSpeed={2000}
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Header />
              <div className="h-screen flex flex-col justify-center">
                <SearchBar
                  placeholder="제품명, 코드를 입력하세요"
                  width="w-1/2"
                  hidden="hidden"
                  autofocus={true}
                  searchPath="/search"
                />
              </div>
            </div>
            <div className="section">
              <div className="h-screen">
                <ShapeFindBox />
              </div>
            </div>
            <div className="section">
              <div className="h-screen">
                <CompareBox medicineData={medicineData} />
              </div>
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
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
