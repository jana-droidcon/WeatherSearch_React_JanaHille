import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.condition.icon_url}@2x.png`,
    });
  }

  function searchCity() {
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  let form = (
    <div class="weather-app">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-form-input"
            type="search"
            placeholder="Enter a City..."
            onChange={updateCity}
          />
          <input
            className="search-form-button"
            type="submit"
            name="Search"
            value={"search"}
          />
        </form>
      </header>
    </div>
  );
  if (loaded) {
    return (
      <div className="weather-app-data">
        {" "}
        <strong>{city}</strong>
        <div classname="weather-app-details">
          <p>
            Thursday, 10:47, condition: {weather.description}, humidity:{" "}
            <strong> {weather.humidity}%</strong>
            wind: <strong>{Math.round(weather.wind)} km/h</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <span className="weather-app-icon">
            <img alt="icon" src={weather.icon} />
          </span>
          <span class="weather-app-temperature">
            <strong>{Math.round(weather.temperature)}</strong>
          </span>
          <span class="weather-app-unit">°C</span>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
