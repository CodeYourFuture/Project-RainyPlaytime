import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import WeatherIcon from "./components/Picture/WeatherIcon";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import FutureWeather from "./components/FutureForecast";


import Icon from './components/Icon/Icon';

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

        <section>
          {/* <WeatherIcon weatherId={weatherData?.weather?.[0]?.id} /> */}
          {weatherData?.list?.map((icon) => (
            <WeatherIcon weatherId={icon.weather[0].id} />
          ))}

          {weatherData?.list?.map((current) => (
            <CurrentWeather
              description={current.weather.description}
              temp={current.main.temp.toFixed()}
              humidity={current.main.humidity}
              pressure={current.main.pressure}
            />
          ))}
        </section>

        <section>
          {weatherData?.list?.map((future) => (
            <FutureWeather
              time={future.dt_txt}
              iconId={future.weather[0].id}
              temp={future.main.temp.toFixed()}
            />
          ))}
        </section>
        

      <Icon name="clear"/>

      </main>

      <Footer />
    </div>
  );
}

export default App;
