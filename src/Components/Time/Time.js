import React, { useState } from "react";
import "./Time.css";



function Time() {
  const [time, setTime] = useState(new Date());
  var weatherManager = require("../WeatherAndPicManagement.js")
  const handleChange = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };
  return (
    <div>
      <img className= "background-img" src={require(`../../Pictures&Videos/${weatherManager.photo}`)} alt="no"/>
      <div className="time-wrapper">
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
