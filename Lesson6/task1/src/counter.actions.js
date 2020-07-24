export const INCREMENT = "COUNTER/INCREMENT";
export const DECREMENT = "COUNTER/DECREMENT";
export const RESET = "COUNTER/RESET";

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
