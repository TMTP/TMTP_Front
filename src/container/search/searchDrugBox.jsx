import * as React from "react";
import useSearchDrugDetail from "../../hooks/Container/Search/searchDrugBox/hook";

const SearchDrugBox = ({ searchQuery }) => {
  const { data } = useSearchDrugDetail();

  try {
    const filteredUsers = data.allRandomUser.edges.filter(({ node }) =>
      node.name.first.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-8">
          {searchQuery}에 대한 결과입니다.
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center">
          {filteredUsers.map(({ node }) => (
            <div
              key={node.id}
              className="bg-gray-100 p-4 rounded-md mb-4  sm:mr-8 sm:border-gray-900 sm:mb-2 sm:border-2 w-full"
            >
              <div className="flex items-center mb-4 sm:mb-0">
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
                <div className="flex flex-col justify-between w-full sm:hidden">
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
      </div>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-3xl font-bold mb-8">
          {searchQuery}에 해당하는 약품이 없습니다.
        </p>
      </div>
    );
  }
};

export default SearchDrugBox;
