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
          <h1 className="text-2xl font-bold mb-4 text-center my-4">
            선택한 정보
          </h1>
          <table className="w-full table-auto my-2 ">
            <thead>
              <tr className="bg-blue-200 sm:text-xs text-center">
                <th className="px-2 py-2">사진</th>
                <th className="px-4 py-2">제품명</th>
                <th className="px-4 py-2">회사명</th>
                <th className="px-4 py-2">제형</th>
                <th className=" sm:hidden px-4 py-2">구분</th>
              </tr>
            </thead>
            <tbody>
              {mounted &&
                filteredEdges.map(({ node }) => (
                  <tr
                    key={node.id}
                    className="border-b-2 border-gray-900 text-xs text-center"
                  >
                    <td className="py-2 justify-center flex sm:ml-2">
                      <img
                        src={node.picture.large}
                        alt={node.name.first}
                        className="rounded-full h-16 w-16 sm:h-auto sm:w-auto  mr-4"
                      />
                    </td>
                    <td className="px-3 py-2">
                      {` ${node.name.first} ${node.name.last}`}
                    </td>
                    <td className=" py-2">
                      {`${node.location.street.name} ${node.location.street.number}`}
                    </td>
                    <td className=" py-2">
                      {`${node.location.city}, ${node.location.state}`}
                    </td>
                    <td className=" sm:hidden  py-2">
                      {node.location.country}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

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
