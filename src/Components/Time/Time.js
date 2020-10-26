import React, { useState, useEffect } from "react";
import "./Time.css";



function Time(props) {

  const [weatherState, setWeatherState] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setWeatherState(props.apiResult);
    console.log(weatherState);
  }, [props.apiResult, weatherState]);

  const handleChange = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  const sunset = weatherState?.sys.sunset * 1000;
  const sunsetHour = new Date(sunset);


  const localTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })


  const sunsetTime = sunsetHour.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <div>
      <div className={localTime >= sunsetTime ? "time-wrapper-dark" : "time-wrapper"}>
        <h1 className="time">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </h1>
        <div className="borders">
          <div className="border-nmb1"></div>
          <div className="border-nmb2"></div>
          <div className="border-nmb3"></div>
          <div className="border-nmb4"></div>
          <div className="border-nmb5"></div>
          <div className="border-nmb6"></div>
        </div>
      </div>
      {handleChange()}
    </div>
  );
}


export default Time;
