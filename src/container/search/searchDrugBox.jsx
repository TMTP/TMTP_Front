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
        <h1>{searchQuery}에 대한 결과입니다.</h1>
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
    return <p>{searchQuery}에 해당하는 약품이 없습니다.</p>;
  }
};

export default SearchDrugBox;
