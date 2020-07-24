import { INCREASE, DECREASE, RESET } from "./counter.actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return 0;
    default:
      return 0;
  }
};

export default counterReducer;
