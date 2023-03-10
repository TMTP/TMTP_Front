import * as React from "react"
import Layout from "../components/Layout/layout"
import Search from "../container/home/search"
import FindBox from "../container/home/findBox"

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Search />
        <FindBox />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>TMTP</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
        rel="stylesheet"
      ></link>
    </>
  )
}
;<title>TMTP</title>
