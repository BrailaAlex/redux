export const TOGGLE = "TOGGLE_LANGUAGE";

export const setLanguage = (lang) => {
  return {
    type: TOGGLE,
    payload: {
      lang,
    },
  };
};
