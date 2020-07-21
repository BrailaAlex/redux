import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPage < numberOfPages;
  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={!isPrevPageAvailable}>
        ←
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button onClick={goNext} className="btn" disabled={!isNextPageAvailable}>
        →
      </button>
    </div>
  );
};

export default Pagination;
