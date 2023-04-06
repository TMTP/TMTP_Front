import { useStaticQuery, graphql } from "gatsby";

const useSeoDetail = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return { data };
};

export default useSeoDetail;
