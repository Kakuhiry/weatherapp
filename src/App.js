import React from "react";
import "./App.css";
import TimeComponent from "./Components/Time/Time.js";
import WeatherManager from "./Components/WeatherAndPicManagement.js"

const App = () => {
  return (
    <div className="appJS">
      <WeatherManager />
      <TimeComponent />
    </div>
  );
};

export default App;
