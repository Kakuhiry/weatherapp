import React, { Component, setState } from "react";
const api = {
  key: "e27e425e63f5eb8e9af7aec940b18eea",
  base: "https://api.openweathermap.org/data/2.5/",
};

const cords = {
    lat: "",
    lon: ""
}



export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weatherStatus: "",
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
    
      cords.lat = position.coords.latitude; 
      cords.lon = position.coords.longitude;
      console.log("Latitude is: ", cords.lat);
      console.log("Longitude is: ", cords.lon);

      fetch(`${api.base}weather?lat=${cords.lat}&lon=${cords.lon}&APPID=${api.key}`)
        .then((res) => res.json())
        .then((json) => this.setState({weatherStatus: json}, console.log(json)))
        .then((json) => {console.log(json)})
    });
  }

  render() {
    return (
      <div>
        <h1>This is the weather Component</h1>
        <h1></h1>
      </div>
    );
  }
}
