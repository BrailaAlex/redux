export const CREATE = "CREATE/USER";
export const DELETE = "DELETE/USER";

export const addUser = (user) => {
  return {
    type: CREATE,
    user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE,
    id,
  };
};
