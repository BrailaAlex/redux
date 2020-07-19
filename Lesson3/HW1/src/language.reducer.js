import { TOGGLE } from "./language.actions";

const initialState = { language: "en" };

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        language: action.payload.lang,
      };
    default:
      return state;
  }
};
