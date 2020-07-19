import { counterReducer } from "./counter.reducer";
import userReducer from "./users.reducer";
import { createStore, combineReducers } from "redux";

const appReducers = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(appReducers);

export default store;
