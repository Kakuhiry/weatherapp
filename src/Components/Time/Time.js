import React, { useState, useEffect } from "react";
import FrostPanel from "../frost-panel/frostPanel";
import Clock from "react-live-clock";
import "./Time.css";

function Time(props) {
  const [weatherState, setWeatherState] = useState(null);

  useEffect(() => {
    setWeatherState(props.apiResult);
    // console.log(weatherState);
    // console.log(props.timezone)
  }, [props.apiResult, weatherState]);
  

  const sunset = weatherState?.sys.sunset * 1000;
  const place = weatherState?.name;
  const sunsetHour = new Date(sunset);

  const time = new Date()

  const localTime = time.toLocaleTimeString([], {
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
      <div
        className={
          localTime >= sunsetTime ? "time-wrapper-dark" : "time-wrapper"
        }
      >
        <h1 className="time">
          <Clock
            className="time"
            format={"HH:mm"}
            ticking={true}
            timezone={props.timezone?._z?.name}
          />
        </h1>

        <div className="borders">
          <div className="border-nmb1"></div>
          <div className="border-nmb2"></div>
          <div className="border-nmb3"></div>
          <div className="location">{place}</div>
          <div className="border-nmb4"></div>
          <div className="border-nmb5"></div>
          <div className="border-nmb6"></div>
        </div>
      </div>
      <div className="panel">
        <FrostPanel />
     
      </div>
    </div>
  );
}

export default Time;
