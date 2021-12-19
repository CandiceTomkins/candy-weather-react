import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Sunday 0900</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sun"
          />{" "}
          18°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity</li>
            <li>Precipitation</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
