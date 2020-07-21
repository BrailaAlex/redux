import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const currentPageNum = currentPage + 1;
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPageNum * itemsPerPage >= totalItems;
  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPageNum}</span>
      <button onClick={goNext} className="btn" disabled={isNextPageAvailable}>
        {!isNextPageAvailable && "→"}
      </button>
    </div>
  );
};

export default Pagination;
