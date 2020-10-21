import React, { useEffect, useState } from "react";
import WeatherComponent from "./Weather/Weather.js";
export const photo = "photo-1470217957101-da7150b9b681.jpeg";

const api = {
  key: "e27e425e63f5eb8e9af7aec940b18eea",
  base: "https://api.openweathermap.org/data/2.5/",
};

const cords = {
  lat: "",
  lon: "",
};

export default function WeatherAndPicManagement() {
  const [apiResponse, setApiResponse] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      cords.lat = position.coords.latitude;
      cords.lon = position.coords.longitude;
      console.log("Latitude is: ", cords.lat);
      console.log("Longitude is: ", cords.lon);
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
      <WeatherComponent apiResult={apiResponse} />
    </div>
  );
}
