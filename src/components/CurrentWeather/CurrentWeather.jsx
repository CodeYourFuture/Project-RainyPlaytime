import React from 'react'
import WeatherIcon from '../Picture/WeatherIcon';


function CurrentWeather({ weatherId, description, temp_min, temp_max, humidity, pressure }) {
  return (
    <>
      <WeatherIcon weatherId={weatherId} />

      <h2 className="description">{description}</h2>
      <h3 className="temp">
        Temperature : {temp_min}° to {temp_max}°C
      </h3>
      
      <div className="current-container">
        <h4 className="humid-press">Humidity : {humidity}%</h4>
        <h4 className="humid-press">Pressure : {pressure}</h4>
      </div>
    </>
  );
}

export default CurrentWeather