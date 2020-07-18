import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: 76, name: "Tom" }));
store.dispatch(addUser({ id: 25, name: "Ann" }));
store.dispatch(addUser({ id: 31, name: "Bob" }));
store.dispatch(addUser({ id: 42, name: "Kim" }));
store.dispatch(deleteUser(25));

const usersList = store.getState();
console.log(usersList);
