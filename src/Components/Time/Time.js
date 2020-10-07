import React, { Component } from "react";
import "./Time.css"

class Time extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  handleChange() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1 className="time">
          {this.state.time.toLocaleTimeString([], {
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
        </div>
        {this.handleChange()}
      </div>
    );
  }
}

export default Time;
