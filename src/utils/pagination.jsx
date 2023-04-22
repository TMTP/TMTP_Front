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

  const totalPages = Math.ceil(medicineData.length / 50);
  let visiblePages = [];

  if (totalPages <= 1) {
    return {
      currentPage,
      handlePageChange,
      currentData,
      visiblePages: [1],
      pages: [1],
    };
  }

  if (currentPage <= 3) {
    visiblePages = [1, 2, 3, 4, ...(totalPages > 4 ? [totalPages] : [])];
  } else if (currentPage >= totalPages - 2) {
    visiblePages = [
      ...(totalPages > 4 ? [1] : []),
      ...(currentPage >= totalPages - 1 ? [totalPages - 3] : [currentPage - 2]),
      ...(currentPage >= totalPages ? [totalPages - 2] : [currentPage - 1]),
      ...(currentPage >= totalPages - 1 ? [totalPages - 1] : [currentPage]),
      ...(currentPage >= totalPages - 2 && totalPages > 4 ? [totalPages] : []),
    ];
  } else {
    visiblePages = [
      ...(totalPages > 4 ? [1] : []),
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      ...(totalPages > 4 ? [totalPages] : []),
    ];
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return { currentPage, handlePageChange, currentData, visiblePages, pages };
}
