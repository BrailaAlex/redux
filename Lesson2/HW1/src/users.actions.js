export const createUser = (user) => {
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
