export const PREV_PAGE = "GO/PREV_PAGE";
export const NEXT_PAGE = "GO/NEXT_PAGE";

export const goPrev = () => {
  return {
    type: PREV_PAGE,
  };
};

export const goNext = () => {
  return {
    type: NEXT_PAGE,
  };
};
