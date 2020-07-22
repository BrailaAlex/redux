import { FILTER_TEXT } from "./users.actions";
import { users } from "./users";

const initialState = {
  filterText: "",
  usersList: users,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TEXT: {
      const newText = action.payload.filterText;
      return {
        ...state,
        filterText: newText,
      };
    }
    default:
      return state;
  }
};
