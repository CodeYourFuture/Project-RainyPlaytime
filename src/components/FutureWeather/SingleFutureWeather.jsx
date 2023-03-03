import React from 'react'
import WeatherImages from '../../WeatherImages/WeatherImages'

const SingleFutureWeather = ({item}) => {
    let infWeather = item.weather[0].id
  return (
    <div>
             <p>{item.dt_txt}</p>
            <WeatherImages infWeather={infWeather}/>
             <p>{(item.main.temp).toFixed(2)} C</p>
            </div>
  )
}

export default SingleFutureWeather