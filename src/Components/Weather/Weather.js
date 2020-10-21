import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather(props) {
  const [weatherStatus, setWeatherStatus] = useState(null);
  useEffect(() => {
    setWeatherStatus(props.apiResult);
    console.log(weatherStatus);
  }, [props.apiResult, weatherStatus]);
  console.log();
  const statusTemp = weatherStatus?.main.temp;
  const temperature = statusTemp?.toString()[0] + statusTemp?.toString()[1];
  const place = weatherStatus?.name;
  const windSpeed = weatherStatus?.wind.speed;

  const sunrise = weatherStatus?.sys.sunrise * 1000;
  const sunriseHour = new Date(sunrise);

  const sunset = weatherStatus?.sys.sunset * 1000;
  const sunsetHour = new Date(sunset);
//changesdfsdf
  return (
    <div>
      <div className="weather-content-box">
        <h1 className="content-box-clouds">{temperature}°C</h1>
        <div className="border-nmb1-weather"></div>
        <div className="location">{place}</div>
        <div className="weather-information">
          <div className="wind-speed">
            {windSpeed} m/s
            <img
              className="wind-icon"
              src={require("../../Pictures&Videos/—Pngtree—vector wind icon_4239293.png")}
              alt=""
            />
            <div className="sunrise-time">
              {sunriseHour.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
            <img
              className="sunrise-icon"
              src={require("../../Pictures&Videos/1582852.png")}
              alt=""
            />
            <div className="sunset-time">
              {sunsetHour.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </div>
            <img
              className="sunset-icon"
              src={require("../../Pictures&Videos/sunset.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
