import "./Header.scss";
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
      <h1 className="c-site-header__title">{title}</h1>

      <input
        className="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={getNewWeather}>Search</button>

      <div>
        <h2>Temp: {weatherData?.main?.temp?.toFixed()}°C</h2>
      </div>

    </header>
  );
};

export default Header;
