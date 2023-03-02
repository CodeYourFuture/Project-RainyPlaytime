import React from "react";
import "./FutureWeather.scss"


const FutureWeather = ({weatherArray}) => {
  
  return(
   <ul>
    {weatherArray.map((weather) => <li>{weather} </li>)}
    </ul>
  )
};

export default FutureWeather;
