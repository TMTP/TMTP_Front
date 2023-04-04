import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";

const CompareIndexPage = ({ data, location }) => {
  const urlParams = new URLSearchParams(location.search);
  const selectedIds = urlParams.getAll("id");
  const filteredEdges = data.allRandomUser.edges.filter(({ node }) =>
    selectedIds.includes(node.id)
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedCountries = filteredEdges.map(
    ({ node }) => node.location.country
  );

  const hasDuplicateCountries =
    new Set(selectedCountries).size !== selectedCountries.length;

  const duplicateCountries = hasDuplicateCountries
    ? [
        ...new Set(
          selectedCountries.filter(
            (country, index) => selectedCountries.indexOf(country) !== index
          )
        ),
      ]
    : [];

  return (
    <main>
      <Layout>
        <div className=" p-4">
          <h1 className="text-2xl font-bold mb-4">선택한 정보</h1>
          {mounted &&
            filteredEdges.map(({ node }) => (
              <div className="border-2 border-gray-400 my-2">
                <img
                  src={node.picture.large}
                  alt={node.picture.thumbnail}
                  className="w-16 h-16 rounded-full mr-4 sm:w-8 sm:h-8"
                />
                <h2 className="text-lg font-bold mb-2">
                  {node.name.first} {node.name.last}
                </h2>
                <p className="text-gray-600">{node.location.country}</p>
              </div>
            ))}
          {mounted && hasDuplicateCountries && (
            <div>
              <p>동일한 국가:</p>
              <ul>
                {duplicateCountries.map((country, index) => (
                  <li key={index}>{country}</li>
                ))}
              </ul>
            </div>
          )}
          {mounted && !hasDuplicateCountries && (
            <div>
              <p>동일한 국가 없음</p>
            </div>
          )}
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query RandomUserQuerya {
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
