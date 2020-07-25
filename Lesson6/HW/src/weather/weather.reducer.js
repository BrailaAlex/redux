import { APPLY_DATA } from "./weather.actions";

const initialState = {
  weatherData: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_DATA:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
};
