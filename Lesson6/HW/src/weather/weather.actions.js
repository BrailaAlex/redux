import { fetchCitiesData } from "./weather.gateways";

export const APPLY_DATA = "WEATHER/APPLY_DATA";

export const applyWeatherData = (weatherData) => {
  return {
    type: APPLY_DATA,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchCitiesData().then((weatherData) => {
      dispatch(applyWeatherData(weatherData));
    });
  };
};
