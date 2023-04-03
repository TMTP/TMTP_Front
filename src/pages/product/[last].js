import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/layout";

export default function Product({ data }) {
  const { name, picture, location } = data.randomUser;

  return (
    <main>
      <Layout>
        <div>
          <h1>{name.last}의 상세정보입니다.</h1>
          <img src={picture.large} alt={name.last} />
          <p>
            Street: {location.street.number} {location.street.name}
          </p>
          <p>City: {location.city}</p>
          <p>State: {location.state}</p>
          <p>Country: {location.country}</p>
        </div>
      </Layout>
    </main>
  );
}

export const query = graphql`
  query ($last: String) {
    randomUser(name: { last: { eq: $last } }) {
      name {
        last
      }
      picture {
        large
      }
      location {
        street {
          number
          name
        }
        city
        state
        country
      }
    }
  }
`;
