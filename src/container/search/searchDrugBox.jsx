import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const SearchDrugBox = ({ searchQuery }) => {
  try {
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

    const filteredUsers = data.allRandomUser.edges.filter(({ node }) =>
      node.name.first.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <>
        <h1>Search Results for {searchQuery}</h1>
        <ul>
          {filteredUsers.map(({ node }) => (
            <li key={node.id}>
              <div>{`${node.name.title} ${node.name.first} ${node.name.last}`}</div>
              <img
                src={node.picture.thumbnail}
                alt={`${node.name.first} ${node.name.last}`}
              />
            </li>
          ))}
        </ul>
      </>
    );
  } catch (err) {
    console.error(err);
    return <p>An error occurred while searching for {searchQuery}.</p>;
  }
};

export default SearchDrugBox;
