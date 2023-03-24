import * as React from "react";
import useDrugBoxDetail from "../../hooks/Container/Product/drugBox/hook";

const ProductDetail = ({ pageContext }) => {
  const { last } = pageContext || {};
  const { data } = useDrugBoxDetail();
  const filteredData = data.allRandomUser.edges.filter(
    ({ node }) => node.name.last === last
  );
  const user = filteredData.length > 0 ? filteredData[0].node : null;

  if (!user) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>Product Detail: {user.name.last}</h1>
      <img src={user.picture.large} alt={user.name.first} />
      <p>{user.gender}</p>
      <p>
        {user.location.street.name} {user.location.street.number}
      </p>
      <p>
        {user.location.city}, {user.location.state}
      </p>
      <p>{user.location.country}</p>
    </div>
  );
};

export default ProductDetail;
