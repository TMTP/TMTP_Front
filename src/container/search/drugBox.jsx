import * as React from "react";
import useDrugBoxDetail from "../../hooks/Container/Search/drugBox/hook";

const DrugBox = () => {
  const { data } = useDrugBoxDetail();

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center">
      {data.allRandomUser.edges.slice(0, 10).map(({ node }) => (
        <div
          key={node.id}
          className="flex items-center mb-4 sm:mb-0 sm:mr-8 sm:w-1/2 w-full"
        >
          <img
            src={node.picture.large}
            alt={node.name.first}
            className="rounded-full h-16 w-16 sm:h-20 sm:w-20 mr-4"
          />
          <div>
            <p className="font-bold text-lg sm:text-xl truncate">
              {`${node.name.title} ${node.name.first} ${node.name.last}`}
            </p>
            <p className="hidden sm:block">{node.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrugBox;
