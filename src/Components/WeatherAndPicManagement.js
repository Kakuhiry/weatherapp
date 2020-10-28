import React, { useEffect, useState } from "react";
import WeatherComponent from "./Weather/Weather.js";
import TimeComponent from "./Time/Time.js"

const api = {
  key: "e27e425e63f5eb8e9af7aec940b18eea",
  base: "https://api.openweathermap.org/data/2.5/",
};

const cords = {
  lat: "",
  lon: "",
};


export default function WeatherAndPicManagement() {
  var photo = "photo-1475738972911-5b44ce984c42.jpeg";
  const [apiResponse, setApiResponse] = useState(null);

  //Right now date
  var dates = new Date();
//Sunset date given by API
  const sunset = apiResponse?.sys.sunset * 1000;
  const sunsetHour = new Date(sunset);

  if (
    dates.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }) >=
    sunsetHour.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  ) {
    photo = "moon-inverted.png";
  
  } else {
    photo = "sol_esquina_solo.png";
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      cords.lat = position.coords.latitude;
      cords.lon = position.coords.longitude;
      
      fetch(
        `${api.base}weather?lat=${cords.lat}&lon=${cords.lon}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((json) => setApiResponse(json))
        .then(console.log());
    });
  }, []);
  return (
    <div>
      <WeatherComponent apiResult={apiResponse} bgPhoto={photo} />
      <TimeComponent apiResult = {apiResponse} />
    </div>
  );
}


