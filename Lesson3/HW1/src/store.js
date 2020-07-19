import { createStore, combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { cartReducer } from "./cart.reducer";
import { languageReducer } from "./language.reducer";

const appReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  language: languageReducer,
});

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
