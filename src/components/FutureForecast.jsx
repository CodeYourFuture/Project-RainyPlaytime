import React from "react";
import WeatherIcon from "./Picture/WeatherIcon";


export default function FutureWeather({ time, iconId, temp }) {

  const formattedTime = time.split(" ")[1].slice(0,5)
 
  return (
    <div>
      <p>{formattedTime}</p>
      <WeatherIcon weatherId={iconId} />
      <p>{temp}</p>
    </div>
  );
}
