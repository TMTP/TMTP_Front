import * as React from "react";
import Layout from "../components/Layout/layout";
import SearchBar from "../container/home/searchBox";
import ShapeFindBox from "../container/home/shapeFindBox";
import CompareBox from "../container/home/compareBox";
import Seo from "../components/seo";
import WebCamera from "../components/WebCam/Webcam";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <SearchBar
          width="w-1/2"
          marginY="my-10"
          autofocus={true}
          placeholder="이름으로 검색하세요"
        />
        <ShapeFindBox />
        <CompareBox />
        <WebCamera />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <Seo>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
          rel="stylesheet"
        ></link>
      </Seo>
    </>
  );
};

<title>TMTP</title>;
