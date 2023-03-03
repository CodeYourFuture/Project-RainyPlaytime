import "./App.scss";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import FutureWeather from "./components/FutureWeather/FutureWeather";
// import WeatherInfo from "./weatherInfo.json"

import { useState } from "react";

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {

   // A state variable to hold weather Array
    const [weatherInfo, setWeatherInfo] = useState([])  //Initialized as an Empty Array
console.log('This is Weather Info: ', weatherInfo);
  if(weatherInfo.length > 0){
    let infWeather =  weatherInfo[0].weather[0].id 
 }
//  <sup>o</sup>
  return (
    <div className="App">
       <Search title={siteTitle} setWeatherInfo={setWeatherInfo} />
       <div className="weather-container "
      //  {
      //   true ? style={{backgroundColor: "This"}}: 
      //  }
       >
        <CurrentWeather weatherInfo={weatherInfo} />
        <FutureWeather weatherInfo={weatherInfo} />
       </div>
      {/* <button> FIND WEATHER</button> */}
{/*
      <main className="c-site-main" tabIndex="0">
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
