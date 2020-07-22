export const FILTER_TEXT = "USERS/FILTER_TEXT";

export const getFilterText = (filterText) => {
  return {
    type: FILTER_TEXT,
    payload: {
      filterText,
    },
  };
};
