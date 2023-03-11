import * as React from "react"
import Layout from "../components/Layout/layout"
import SearchBar from "../container/home/searchBox"
import FindBox from "../container/home/findBox"
import PageMeta from "../components/PageMeta"

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <SearchBar />
        <FindBox />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <PageMeta title="메인페이지" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
        rel="stylesheet"
      ></link>
    </>
  )
}
