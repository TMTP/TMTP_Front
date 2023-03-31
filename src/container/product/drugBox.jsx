import { Link } from "gatsby";
import * as React from "react";
import useDrugBoxDetail from "../../hooks/Container/Product/drugBox/hook";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const DrugBox = () => {
  const { data } = useDrugBoxDetail();
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    if (location !== previousLocation) {
      setPreviousLocation(location);
    }
  }, [location]);

  return (
    <div className="bg-white p-6 rounded-md shadow-md ">
      <h1 className="text-3xl text-center font-bold mb-16 sm:text-base sm:mb-5 text-red-300">
        전체 약품에 대한 정보입니다.
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center ">
        {data.allRandomUser.edges.slice(0, 30).map(({ node }) => (
          <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-2 border-[2px] border-black bg-gray-100">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-8 sm:w-1/2  w-full">
              <div className="flex items-center mr-4 flex-shrink-0">
                <img
                  src={node.picture.large}
                  alt={node.name.first}
                  className="rounded-full h-16 w-16 sm:h-10 sm:w-10 mr-4 border-[2px]"
                />
                <Link
                  to={`/product/${node.name.last}`}
                  state={{ last: node.name.last }}
                >
                  <p className="font-bold text-lg sm:text-base truncate ">
                    {` ${node.name.first} ${node.name.last}`}
                  </p>
                  <p className="hidden sm:block ">{node.gender}</p>
                </Link>
              </div>
              <div className="flex flex-col justify-between w-full sm:hidden ">
                <div className="text-right">
                  <p className="font-bold text-lg sm:text-xs truncate ">
                    {`${node.location.street.name} ${node.location.street.number}`}
                  </p>
                </div>
                <div className="text-right mt-1 sm:mt-0 sm:ml-4">
                  <p className="font-bold text-lg sm:text-xs truncate ">
                    {`${node.location.city}, ${node.location.state}`}
                  </p>
                </div>
                <div className="text-right mt-1 sm:mt-0 sm:ml-4">
                  <p className="font-bold text-lg sm:text-xs truncate ">
                    {node.location.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrugBox;
