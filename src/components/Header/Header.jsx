import "./Header.scss";
import React, { useState } from "react";

const Header = ({ title, getNewWeather }) => {
  const [city, setCity] = useState("");

  return (
    <header className="c-site-header">
      <div className="heading">
        <h1 className="c-site-header__title">{title}</h1>
        <input
          className="city"
          type="text"
          placeholder="Type in a city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button className="search-btn" onClick={() => getNewWeather(city)}>
          FIND WEATHER
        </button>
      </div>

    </header>
  );
};

export default Header;
