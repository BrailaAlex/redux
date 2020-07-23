import { createStore, applyMiddleware, compose } from "redux";
import counterReducer from "./components/counter.reducer";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatcing", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(result);
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger));

const store = createStore(counterReducer, enhancer);

export default store;
