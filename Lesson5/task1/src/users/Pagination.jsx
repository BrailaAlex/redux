import React from "react";

const Pagination = ({
  goNext,
  goPrev,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const currentPageNum = currentPage + 1;

  const isLastPage = currentPageNum * itemsPerPage >= totalItems;

  const isFirstPage = currentPageNum === 1 ? true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPageNum}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? "" : "→"}
      </button>
    </div>
  );
};

export default Pagination;
