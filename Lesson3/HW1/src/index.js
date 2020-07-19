import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";
import { setUser, removeUser } from "./user.actions";
import store from "./store";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 76, name: "milk" }));
store.dispatch(addProduct({ id: 42, name: "coffee" }));
store.dispatch(addProduct({ id: 32, name: "rocket" }));
store.dispatch(removeProduct(42));
store.dispatch(setUser({ firsName: "Christian", secondName: "Bale" }));
store.dispatch(removeUser());
store.dispatch(setLanguage("es"));
