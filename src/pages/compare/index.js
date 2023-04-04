import * as React from "react";
import Layout from "../../components/Layout/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";

const CompareIndexPage = ({ data, location }) => {
  const urlParams = new URLSearchParams(location.search);
  const selectedIds = urlParams.getAll("id");
  const filteredEdges = data.allRandomUser.edges.filter(({ node }) =>
    selectedIds.includes(node.id)
  );

  return (
    <main>
      <Layout>
        <div>
          <h1>Compare Page</h1>
          {filteredEdges.map(({ node }) => (
            <div key={node.id}>
              <h2>
                {node.name.first} {node.name.last}
              </h2>
              <p>
                {node.location.city}, {node.location.country}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
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
`;

export default CompareIndexPage;

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

<title>TMTP|Compare</title>;
