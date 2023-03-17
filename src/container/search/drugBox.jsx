import * as React from "react";
import useDrugBoxDetail from "../../hooks/Container/Home/Search/hook";

const DrugBox = () => {
  const { data } = useDrugBoxDetail();

  return (
    <div>
      {data.allRandomUser.edges.slice(0, 10).map(({ node }) => (
        <div key={node.id}>
          <img src={node.picture.medium} alt={node.name.first} />
          <p>{`${node.name.title} ${node.name.first} ${node.name.last}`}</p>
          <p>{node.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default DrugBox;
