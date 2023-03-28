import React from "react";
import { graphql } from "gatsby";

export default function Product({ data }) {
  const { name, picture, location } = data.randomUser;

  return (
    <div>
      <h1>Product Details for {name.last}</h1>
      <img src={picture.large} alt={name.last} />
      <p>
        Street: {location.street.number} {location.street.name}
      </p>
      <p>City: {location.city}</p>
      <p>State: {location.state}</p>
      <p>Country: {location.country}</p>
    </div>
  );
}

export const query = graphql`
  query ($last: String!) {
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
