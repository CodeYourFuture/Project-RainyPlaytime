import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WeatherIcon from "./components/Picture/WeatherIcon";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import FutureWeather from "./components/FutureForecast";


const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  
  function getNewWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3b86046cce0de3be7cfa8369f4540b37`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  }
  
  return (
    <div className="App">
      <Header
        title={siteTitle}
        getNewWeather={getNewWeather}
        weatherData={weatherData}
      />

      <main className="c-site-main" tabIndex="0">
        {/* <div>
          <img
            className="weather-img"
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt="Current Weather"
          />
        </div> */}


        {/* {FakeWeatherData.list.map((data) => (
          <div key={data.dt}>Temp : {data && data.main.temp}</div>
        ))} */}

        {/* <div>{location}</div> */}
        {/* <div>{temp && temp.list[0].main.temp}</div> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
