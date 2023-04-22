import { useState } from "react";

export function usePagination(medicineData) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  const startIdx = (currentPage - 1) * 50;
  const endIdx = startIdx + 50;
  const currentData = medicineData.slice(startIdx, endIdx);

  const pages = Array.from(
    { length: Math.ceil(medicineData.length / 50) },
    (_, i) => i + 1
  );

  let visiblePages = [];
  if (currentPage <= 3) {
    visiblePages = pages.slice(0, 5);
  } else if (currentPage >= pages.length - 2) {
    visiblePages = pages.slice(pages.length - 5);
  } else {
    visiblePages = pages.slice(currentPage - 4, currentPage + 3);
  }

  return { currentPage, handlePageChange, currentData, visiblePages, pages };
}
