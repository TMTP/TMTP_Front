import { useStaticQuery, graphql } from "gatsby";

const useFindBoxDetail = () => {
  const data = useStaticQuery(graphql`
    query RandomUserQuery {
      allRandomUser {
        edges {
          node {
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
          }
        }
      }
    }
  `);
  return { data };
};

export default useFindBoxDetail;
