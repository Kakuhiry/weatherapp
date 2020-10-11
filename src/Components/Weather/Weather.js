import React, { useState, useEffect } from "react";
const api = {
  key: "e27e425e63f5eb8e9af7aec940b18eea",
  base: "https://api.openweathermap.org/data/2.5/",
};

const cords = {
  lat: "",
  lon: "",
};

function Weather() {
  const [weatherStatus, setWeatherStatus] = useState(null);
  const ApiCall = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      cords.lat = position.coords.latitude;
      cords.lon = position.coords.longitude;
      console.log("Latitude is: ", cords.lat);
      console.log("Longitude is: ", cords.lon);

      fetch(
        `${api.base}weather?lat=${cords.lat}&lon=${cords.lon}&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((json) => setWeatherStatus(json))
        .then(console.log(weatherStatus));
    });
    ApiCall();

    console.log("Hello world");
  };
  return (
    <div>
      <div>{console.log(weatherStatus)}</div>
    </div>
  );
}

export default Weather;
