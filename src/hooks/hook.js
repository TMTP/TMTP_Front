import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function useHook() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const link = [1, 2, 3]

  return { data, link }
}

export default useHook
