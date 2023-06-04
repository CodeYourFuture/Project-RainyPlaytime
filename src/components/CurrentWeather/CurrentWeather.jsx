import React from 'react'
import "./CurrentWeather.scss"
// Importing Image
import WeatherImages from '../../WeatherImages/WeatherImages'

const CurrentWeather = ({weatherInfo}) => {

  if(weatherInfo.length > 0){
    
  const infWeather =  weatherInfo[0].weather[0].id 
 
  // const WeatherIcons = (infWeather)=>{
  //   return (
  //   infWeather < 300 ? <img src={Storm} />
  //   :  infWeather >= 300 && infWeather <= 499 ? <img 
  //   src={Drizzle} /> : infWeather >= 500 && infWeather <= 599 ? <img 
  //   src={Rain} /> : infWeather >= 600 && infWeather <= 699 ? <img 
  //   src={Snow} /> : infWeather >= 700 && infWeather <= 799 ? <img 
  //   src={Fog} /> : infWeather === 800 ? <img 
  //   src={Clear} /> : infWeather === 801 ? <img 
  //   src={PartlyCloudy} /> : infWeather >= 802 && infWeather <= 805 ? <img 
  //   src={MostlyCloudy} /> :
  //    <p>No Image Found</p> 
  // )}
  return (
   
    <div className='current-weather-container'>
      <div className='weather-details'>
      <WeatherImages infWeather={infWeather}/>
       
       <h2>{weatherInfo[0].weather[0].description}</h2>
       <h3>Temperature {weatherInfo[0].main.temp_min} to {weatherInfo[0].main.temp_max} C</h3>
       <p>Humidity {weatherInfo[0].main.humidity} Pressure {weatherInfo[0].main.pressure}</p>
       </div>
    </div>
    
    
  )} else {
    return (<p>Not data found</p>)
  }
}

export default CurrentWeather





