import React from "react";
import { connect } from "react-redux";
import * as counterActions from "../counter.actions";

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button onClick={decrement} className="counter__button">
        -
      </button>
      <span onClick={reset} className="counter__value">
        {counter}
      </span>
      <button onClick={increment} className="counter__button">
        +
      </button>
    </div>
  );
};

// const mapDispatch = (dispatch) => {
//   const { increment, decrement, reset } = counterActions;
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
//   };
// };

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const mapState = (state) => {
  return {
    counter: state,
  };
};

const connector = connect(mapState, mapDispatch); // HOC

export default connector(Counter);
