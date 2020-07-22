import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer";

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
