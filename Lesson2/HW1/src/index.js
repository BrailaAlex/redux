import store from "./store";
import { createUser, deleteUser } from "./users.actions";

store.dispatch(createUser({ id: 76, name: "Tom" }));
store.dispatch(createUser({ id: 25, name: "Ann" }));
store.dispatch(createUser({ id: 31, name: "Bob" }));
store.dispatch(createUser({ id: 42, name: "Kim" }));
store.dispatch(deleteUser(25));

const usersList = store.getState();
console.log(usersList);
