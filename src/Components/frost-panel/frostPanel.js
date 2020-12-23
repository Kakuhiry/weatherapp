import React from "react";
import "./frostPanel.css";

export default function frostPanel(props) {
  console.log(props.sunsetAndSunrise[0]);

  const sunset = props.sunsetAndSunrise[0] * 1000;
  const sunsetHour = new Date(sunset);

  const date = new Date();

  const currentDate = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const sunsetTime = sunsetHour.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div>
      <div className="container">
        <div
          className={currentDate >= sunsetTime ? "humidity-dark" : "humidity"}
        >
          <div className="humidity-text">Humidity: {props.humidity}</div>
          <img
            className="water-drop-icon"
            src={
              require("../../Pictures&Videos/humidity_water-drop.png").default
            }
            alt=""
          />
        </div>

        <div className={currentDate >= sunsetTime ? "separator-dark" : "separator"}></div>

        <div
          className={currentDate >= sunsetTime ? "pressure-dark" : "pressure"}
        >
          <div className="pressure-text">Pressure: {props.pressure}</div>
          <img
            className="pressure-icon"
            src={require("../../Pictures&Videos/pressure.png").default}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
