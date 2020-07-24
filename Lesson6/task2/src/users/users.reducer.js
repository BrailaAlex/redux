import { SHOW_SPINNER, USER_DATA_RECEIVE } from "./users.actions";

const initialData = {
  userData: null,
  isFetching: false,
};

export const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_DATA_RECEIVE: {
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
