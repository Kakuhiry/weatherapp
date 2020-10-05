import React, {Component} from 'react';
import './App.css';
import TimeComponent from './Components/Time.js';
import WeatherComponent from './Components/Weather.js';



const App = () => {
  return (
    <div>
    <h1>Hello</h1>
      <TimeComponent />
      <WeatherComponent />
    </div>
  );
}

export default App;
