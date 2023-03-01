import React from 'react'

function CurrentWeather({ description, temp, humidity, pressure }) {
  return (
    <>
      <div className="description">
        <h2>{description}</h2>
      </div>

      <div className="temp">
        <h3>Temperature : {temp}°C</h3>
      </div>

      <div className="box">
        <div className="sub-box">
          <h4>Humidity : {humidity}%</h4>
        </div>

        <div className="sub-box">
          <h4>Pressure : {pressure}</h4>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather