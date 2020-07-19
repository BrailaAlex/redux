import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions";

const initState = {
  usersList: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.userData],
      };

    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(
          (user) => user.id !== action.payload.userId
        ),
      };
    case UPDATE_USER:
      const { userData, userId } = action.payload;
      const newUser = state.usersList.map((user) =>
        user.id === userId ? { ...user, ...userData } : user
      );
      debugger;
      return {
        ...state,
        usersList: newUser,
      };
    default:
      return state;
  }
};

export default usersReducer;
