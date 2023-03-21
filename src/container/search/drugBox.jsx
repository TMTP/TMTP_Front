import * as React from "react";
import useDrugBoxDetail from "../../hooks/Container/Search/drugBox/hook";

const DrugBox = () => {
  const { data } = useDrugBoxDetail();

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center">
      {data.allRandomUser.edges.slice(0, 30).map(({ node }) => (
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <div className="flex items-center mb-4 sm:mb-0 sm:mr-8 sm:w-1/2  w-full">
            <div className="flex items-center mr-4 flex-shrink-0">
              <img
                src={node.picture.large}
                alt={node.name.first}
                className="rounded-full h-16 w-16 sm:h-10 sm:w-10 mr-4"
              />
              <div>
                <p className="font-bold text-lg sm:text-base truncate">
                  {`${node.name.title} ${node.name.first} ${node.name.last}`}
                </p>
                <p className="hidden sm:block">{node.gender}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full sm:hidden ">
              <div className="text-right">
                <p className="font-bold text-lg sm:text-xs truncate">
                  {`${node.location.street.name} ${node.location.street.number}`}
                </p>
              </div>
              <div className="text-right mt-1 sm:mt-0 sm:ml-4">
                <p className="font-bold text-lg sm:text-xs truncate">
                  {`${node.location.city}, ${node.location.state}`}
                </p>
              </div>
              <div className="text-right mt-1 sm:mt-0 sm:ml-4">
                <p className="font-bold text-lg sm:text-xs truncate">
                  {node.location.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrugBox;
