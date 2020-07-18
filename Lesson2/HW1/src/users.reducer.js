const initState = {
  usersList: [],
};

const CREATE = "CREATE/USER";
const DELETE = "DELETE/USER";

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        usersList: [...state.usersList, action.user],
      };

    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};
