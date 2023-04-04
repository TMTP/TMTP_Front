import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function useCommonHook() {
  const data = useStaticQuery(graphql`
    query RandomUserQuery {
      allRandomUser {
        edges {
          node {
            id
            gender
            name {
              title
              first
              last
            }
            picture {
              large
              medium
              thumbnail
            }
            location {
              street {
                name
                number
              }
              city
              country
              state
            }
          }
        }
      }
    }
  `);
  return { data };
}

export default useCommonHook;
