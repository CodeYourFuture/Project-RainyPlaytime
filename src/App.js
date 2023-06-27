import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import FutureWeather from "./components/FutureWeather/FutureWeather";


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
        <section className="current">
          <CurrentWeather
            weatherId={weatherData?.list?.[0]?.weather?.[0]?.id}
            description={weatherData?.list?.[0]?.weather?.[0]?.description}
            temp_min={Math.floor(weatherData?.list?.[0]?.main?.temp_min)}
            temp_max={Math.ceil(weatherData?.list?.[0]?.main?.temp_max)}
            humidity={weatherData?.list?.[0]?.main?.humidity}
            pressure={weatherData?.list?.[0]?.main?.pressure}
          />
        </section>

        <section className="future">
          {weatherData?.list?.splice(0, 7)?.map((future) => (
            <FutureWeather
              time={future.dt_txt}
              iconId={future.weather[0].id}
              temp={future.main.temp.toFixed()}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
