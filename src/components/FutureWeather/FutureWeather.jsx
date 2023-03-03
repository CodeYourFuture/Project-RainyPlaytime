import React from 'react'
import "./FutureWeather.scss"

import SingleFutureWeather from './SingleFutureWeather'


const FutureWeather = (props) => {
  const {weatherInfo} = props

  console.log('Future Weather Info:', weatherInfo);
  // const newArr = weatherInfo.slice(0, 7)
  // console.log(newArr);

  // Create a Child Comp, WeatherCard. Pass Item as a prop, and sdisplay there
  return (
    <div className='FutureWeather'>
        <p>FutureWeather</p>
        <div className="weather-container" style={{display: "flex", justifyContent:"center"}}>
      {
        weatherInfo.length > 0 ?
        weatherInfo.slice(1, 7).map((item) => {
          console.log(item);
          return (
            <SingleFutureWeather item={item}/>
          )
        }) : <p>No Data</p>
      }
      </div>
    </div>
  )
}

export default FutureWeather