import React from 'react'
import WeatherImg from "../img/weather-icons/clear.svg"
import Storm from "../img/weather-icons/storm.svg" 
import Drizzle from "../img/weather-icons/drizzle.svg"
import Rain from "../img/weather-icons/rain.svg"
import Snow from "../img/weather-icons/snow.svg"
import Fog from "../img/weather-icons/fog.svg"
import Clear from "../img/weather-icons/clear.svg"
import PartlyCloudy from "../img/weather-icons/partlycloudy.svg"
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg"
const WeatherImages = ({infWeather}) => {
  return (
    <>
    {
        infWeather < 300 ? <img src={Storm} />
        :  infWeather >= 300 && infWeather <= 499 ? <img 
        src={Drizzle} /> : infWeather >= 500 && infWeather <= 599 ? <img 
        src={Rain} /> : infWeather >= 600 && infWeather <= 699 ? <img 
        src={Snow} /> : infWeather >= 700 && infWeather <= 799 ? <img 
        src={Fog} /> : infWeather === 800 ? <img 
        src={Clear} /> : infWeather === 801 ? <img 
        src={PartlyCloudy} /> : infWeather >= 802 && infWeather <= 805 ? <img 
        src={MostlyCloudy} /> :
         <p>No Image Found</p> 
    }
    </>
  )
}

export default WeatherImages