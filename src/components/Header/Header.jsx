import "./Header.scss";
import WeatherIcon  from "../Picture/WeatherIcon";
import React, { useState} from "react";


const Header = ({ title }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  

  function getNewWeather (){
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3b86046cce0de3be7cfa8369f4540b37`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
  }

  return (
    <header className="c-site-header">
      <div className="heading">
        <h1 className="c-site-header__title">{title}</h1>
        <input
          className="city"
          type="text"
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button className="search-btn" onClick={getNewWeather}>FIND WEATHER</button>
      </div>

      <WeatherIcon weatherId={weatherData?.weather?.[0]?.id} />
      <div className="description">
        <h3>{weatherData?.weather?.[0]?.description}</h3>
      </div>

      <div className="temp">
        <h2>Temperature : {weatherData?.main?.temp?.toFixed()}°C</h2>
      </div>

      <div className="box">
        <div className="sub-box">
          <h4>Humidity : {weatherData?.main?.humidity}% </h4>
        </div>

        <div className="sub-box">
          <h4>Pressure : {weatherData?.main?.pressure}</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;


