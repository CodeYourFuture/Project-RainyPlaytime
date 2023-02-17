import "./Header.scss";
import React, { useState, useEffect } from "react";

const Header = ({ title }) => {
  const [data, setData] = useState([]);
  // const [city, setCity] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=liverpool&units=metric&appid=3b86046cce0de3be7cfa8369f4540b37`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.main.temp.toFixed());
        setData(data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <header className="c-site-header">
      <h1 className="c-site-header__title">{title}</h1>

      <input
        className="city"
        type="text"
        // value={city}
        // onChange={(event) => setCity(event.target.value)}
      />

      <button>Search</button>

      <div>
        <h1>Temp:{data.main.temp.toFixed()}°C</h1>
      </div>

      {/* {data.main.temp ? <h1>Temp:{data.main.temp}°C </h1> : null} */}
    </header>
  );
};

export default Header;
