import { TOGGLE } from "./language.actions";

export const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case TOGGLE:
      return action.payload.lang;
    default:
      return state;
  }
};
