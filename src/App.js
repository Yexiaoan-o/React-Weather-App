import React, { useState} from "react";
import Weather from "./components/Weather";


function App() {
  const [weatherDetails, setWeatherDetails] = useState({city: '', days: []});
  const [city, setCity] = useState('')

  async function fetchWeatherData(city) {
    if(city ==''){
      alert('Enter a city name.')
      return
    }
    
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5a6daf6c8416635efbaf97563af8eba1`
    ).then((res) => res.json());

    if (data.cod == 200){
      setWeatherDetails({
        city: data.city.name,
        days: [
          {
            date: data.list[0].dt_txt,
            weather_desc: data.list[0].weather[0].description,
            icon: data.list[0].weather[0].icon,
            temp: data.list[0].main.temp,
          },
          {
            date: data.list[8].dt_txt,
            weather_desc: data.list[8].weather[0].description,
            icon: data.list[8].weather[0].icon,
            temp: data.list[8].main.temp,
          },
          {
            date: data.list[16].dt_txt,
            weather_desc: data.list[16].weather[0].description,
            icon: data.list[16].weather[0].icon,
            temp: data.list[16].main.temp,
          },
          {
            date: data.list[24].dt_txt,
            weather_desc: data.list[24].weather[0].description,
            icon: data.list[24].weather[0].icon,
            temp: data.list[24].main.temp,
          },
          {
            date: data.list[32].dt_txt,
            weather_desc: data.list[32].weather[0].description,
            icon: data.list[32].weather[0].icon,
            temp: data.list[32].main.temp,
          },
        ],
      });
    } else if (data.cod ==404) {
      alert('Enter a valid city name.')
    }

  }

  function handleInputChange(e){
    setCity(e.target.value)
  }

  const filteredArrays = weatherDetails.days.filter((_, index)=> index !==0)

  const weatherArrays= filteredArrays.map((weather,index) => {
    return (
      <Weather key={index} date={weather.date} icon={weather.icon} temp={weather.temp}/>
    )
    
  })

  return (
    <>
      <div className="banner-container">
        {weatherArrays.length ? (
          <div className="today-weather">
            <img className="today-icon" src={`./images/${weatherDetails.days[0].icon}.svg`}></img>
            <div className="weather-info">
              <span className="today">Today</span>
              <span className="city">{weatherDetails.city}</span>
              <span className="today-tem">Temperature: {weatherDetails.days[0].temp}℉</span>
              <span className="weather-condition">{weatherDetails.days[0].weather_desc}</span>
            </div>
          </div>
        ) : (
          <div className="banner-head">
            <img className="banner-icon" src='./images/02d.svg'></img>
            <h1 id="title">Weather Forecast</h1>
          </div>
        )}

        <input
          onChange={handleInputChange}
          onKeyDown={(e)=>{
            if (e.keyCode === 13){
              fetchWeatherData(city)
            }
            }}
          value={city}
          type="text"
          id="city-input"
          placeholder="Enter a city name..."
        ></input>
      </div>
      {weatherArrays.length > 0 && (
        <div className="weather-container">
          {weatherArrays}
        </div>
      )}
    </>
  );
}

export default App;
