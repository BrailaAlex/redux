export const INCREASE = "INCREASE/COUNTER";
export const DECREASE = "DECREASE/COUNTER";
export const RESET = "RESET/COUNTER";

export const increment = () => {
  return {
    type: INCREASE,
  };
};

export const decrement = () => {
  return {
    type: DECREASE,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
