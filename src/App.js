import React, {} from 'react';
import './App.css';
import TimeComponent from './Components/Time/Time.js';
import WeatherComponent from './Components/Weather/Weather.js';



const App = () => {
  return (
    <div>
      <TimeComponent />
      <WeatherComponent />
    </div>
  );
}

export default App;
