import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

const Weather = ({width}) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_WEATHER_KEY,
    lat: "36.074330",
    lon: "-86.706050",
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  });

  const customStyles = {
    fontFamily: "Helvetica, sans-serif",
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };
  return (
    <div style={{width: width}}>
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Nashville"
        unitsLabels={{ temperature: "F", windSpeed: "M/h" }}
        showForecast
      />
    </div>
  );
};

export default Weather;
