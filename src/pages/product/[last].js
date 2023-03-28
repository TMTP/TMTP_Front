import React from "react";
import { graphql } from "gatsby";

const Product = ({ data }) => {
  const last = data.randomUser.name.last;
  // Render the product details using the `last` parameter

  return (
    <div>
      <h1>Product Details for {last}</h1>
      {/* Render the rest of the product details here */}
    </div>
  );
};

export const query = graphql`
  query ($last: String!) {
    randomUser(name: { last: { eq: $last } }) {
      name {
        last
      }
      # Fetch the rest of the product details here
    }
  }
`;

export default Product;
