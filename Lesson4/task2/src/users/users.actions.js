export const ADD_USER = "ADD/USER";
export const DELETE_USER = "DELETE/USER";

export const addUser = (userData) => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: {
      userId,
    },
  };
};
