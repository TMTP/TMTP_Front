import { useStaticQuery, graphql } from "gatsby";

function useCompareBoxDetail() {
  const data = useStaticQuery(graphql`
    query RandomUserQuerys {
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

export default useCompareBoxDetail;
