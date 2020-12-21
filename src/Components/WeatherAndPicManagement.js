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
  const [timeZone, setTimeZone] = useState('')

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


  const StablishTimeZone = (longitude, latitude) => {
    var ts = require('@mapbox/timespace');
    var timestamp = Date.now();
    var point = [longitude, latitude];
    var time = ts.getFuzzyLocalTimeFromPoint(timestamp, point)
    setTimeZone(time)
  }

  const getDataFromApi = (longitude, latitude) => {
    fetch(
      `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((json) => setApiResponse(json))
      // .then(console.log());
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      cords.lat = position.coords.latitude;
      cords.lon = position.coords.longitude;
      
      StablishTimeZone(cords.lon, cords.lat);
      getDataFromApi(cords.lon, cords.lat)
    });
  }, []);

  return (
    <div>
      <WeatherComponent apiResult={apiResponse} bgPhoto={photo}  />
      <TimeComponent apiResult = {apiResponse} timezone= {timeZone} />
    </div>
  );
}


