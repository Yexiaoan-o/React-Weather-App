import React, { useState } from "react";
import Weather from "./Weather";

function App() {
  const [weatherDetails, setWeatherDetails] = useState({ city: "", days: [] });
  const [city, setCity] = useState("");

  async function fetchWeatherData(e, city) {
    if (city == "") {
      alert("Enter a city name.");
      return;
    }
    e.target.classList.add("loading");

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5a6daf6c8416635efbaf97563af8eba1`
    ).then((res) => res.json());

    if (data.cod == 200) {

      const filteredDays = data.list.filter((day) => {
        const pattern = /.*12:00:00*/;
        return pattern.test(day.dt_txt);
      });

      setWeatherDetails({
        city: data.city.name,
        days: filteredDays,
      });
    } else if (data.cod == 404) {
      alert("Enter a valid city name.");
    }
    e.target.classList.remove("loading");
  }

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  const excludeToday = weatherDetails.days.filter((_, index) => index !== 0);

  const weatherForecasts = excludeToday.map((weather, index) => {
    return (
      <Weather
        key={index}
        date={weather.dt_txt}
        icon={weather.weather[0].icon}
        temp={weather.main.temp}
      />
    );
  });

  return (
    <>
      <div className="banner-container">
        {weatherForecasts.length ? (
          <div className="today-weather">
            <img
              className="today-icon"
              src={`./images/${weatherDetails.days[0].weather[0].icon}.svg`}
            ></img>
            <div className="weather-info">
              <span className="today">Today</span>
              <span className="city">{weatherDetails.city}</span>
              <span className="today-tem">
                Temperature: {Math.round(weatherDetails.days[0].main.temp -273.15)}℃
              </span>
              <span className="weather-condition">
                {weatherDetails.days[0].weather[0].description}
              </span>
            </div>
          </div>
        ) : (
          <div className="banner-head">
            <img className="banner-icon" src="./images/02d.svg"></img>
            <h1 id="title">Weather Forecast</h1>
          </div>
        )}

        <input
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              fetchWeatherData(e, city);
            }
          }}
          value={city}
          type="text"
          id="city-input"
          placeholder="Enter a city name..."
        ></input>
      </div>
      {weatherForecasts.length > 0 && (
        <div className="weather-container">{weatherForecasts}</div>
      )}
    </>
  );
}

export default App;
