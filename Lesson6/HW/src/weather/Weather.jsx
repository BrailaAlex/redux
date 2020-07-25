import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getWeatherData } from "./weather.actions";

const Weather = ({ weatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  if (!weatherData) {
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map((city) => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{`${city.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

Weather.propTypes = {
  weatherData: PropTypes.array.isRequired,
  getWeatherData: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    weatherData: state.weather.weatherData,
  };
};

const mapDispatch = {
  getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
