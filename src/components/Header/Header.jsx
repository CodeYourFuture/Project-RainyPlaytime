import "./Header.scss";
import React, { useState, useEffect } from "react";

const Header = ({ title }) => {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState("");

  function changeCity(){
     setTemp(temp);
  }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=liverpool&units=metric&appid=3b86046cce0de3be7cfa8369f4540b37`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.main.temp.toFixed());
        setTemp(data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <header className="c-site-header">
      <h1 className="c-site-header__title">{title}</h1>

      <input
        className="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={changeCity}>Search</button>
      <div>
        <h2>Temp:{temp.main.temp.toFixed()}°C</h2>
      </div>

      {/* {data.main.temp ? <h1>Temp:{data.main.temp}°C </h1> : null} */}
    </header>
  );
};

export default Header;
