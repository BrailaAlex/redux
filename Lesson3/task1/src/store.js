import { counterReducer } from "./counter.reducer";
import userReducer from "./users.reducer";
import { createStore, combineReducers } from "redux";

const appReducers = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
