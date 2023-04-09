// import * as React from "react";
// import Link from "next/link";

// const SearchDrugBox = ({ searchQuery }) => {
//   try {
//     const filteredUsers = data.allRandomUser.edges.filter(({ node }) =>
//       node.name.first.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <h1 className="text-3xl text-center font-bold mb-8 sm:text-base sm:mb-5 text-red-500">
//           {searchQuery}에 대한 결과입니다.
//         </h1>
//         <table className="w-full table-auto ">
//           <thead>
//             <tr className="bg-blue-200 sm:text-xs text-center">
//               <th className="px-2 py-2">사진</th>
//               <th className="px-4 py-2">제품명</th>
//               <th className="px-4 py-2">회사명</th>
//               <th className="px-4 py-2">제형</th>
//               <th className=" sm:hidden px-4 py-2">구분</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map(({ node }) => (
//               <tr
//                 key={node.id}
//                 className="border-b-2 border-gray-900 text-xs text-center"
//               >
//                 <td className="py-2 justify-center flex sm:ml-2">hi</td>
//                 <td className="px-3 py-2">
//                   <Link to={`/product/${node.name.last}`}>
//                     {` ${node.name.first} ${node.name.last}`}
//                   </Link>
//                 </td>
//                 <td className=" py-2">
//                   {`${node.location.street.name} ${node.location.street.number}`}
//                 </td>
//                 <td className=" py-2">
//                   {`${node.location.city}, ${node.location.state}`}
//                 </td>
//                 <td className=" sm:hidden  py-2">{node.location.country}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   } catch (err) {
//     console.error(err);
//     return (
//       <div className="bg-white p-6 rounded-md shadow-md">
//         <p className="text-3xl font-bold mb-8">
//           {searchQuery}에 해당하는 약품이 없습니다.
//         </p>
//       </div>
//     );
//   }
// };

// export default SearchDrugBox;
