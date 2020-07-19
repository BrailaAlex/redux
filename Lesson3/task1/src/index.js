import store from "./store";
import { increment, decrement, reset } from "./counter.actions";
import { addUser, deleteUser, updateUser } from "./users.actions";

console.log(increment);
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(addUser({ id: 22, name: "Maria" }));
store.dispatch(addUser({ id: 42, name: "Sofia" }));
store.dispatch(deleteUser(22));
store.dispatch(updateUser(42, { name: "Halyna", occupation: "mom" }));
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
