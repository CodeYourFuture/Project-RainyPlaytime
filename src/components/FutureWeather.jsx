import React from "react";
import WeatherIcon from "./Picture/WeatherIcon";


 function FutureWeather({ time, iconId, temp }) {
  const formattedTime = time.split(" ")[1].slice(0,5)
 
  return (
    <div className="container">
      <div className="items">
        <p>{formattedTime}</p>
        <div className="future-icon">
          <WeatherIcon weatherId={iconId} />
        </div>
        <p>{temp}°C</p>
      </div>
    </div>
  );
}
export default FutureWeather;

