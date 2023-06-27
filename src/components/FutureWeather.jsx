import React from "react";
import WeatherIcon from "./Picture/WeatherIcon";


 function FutureWeather({ time, iconId, temp }) {
  const formattedTime = time.split(" ")[1].slice(0,5)
 
  return (
    <div className="container">
      <div className="items">
        <p>{formattedTime}</p>
        <WeatherIcon weatherId={iconId} />
        <p>{temp}°C</p>
      </div>
    </div>
  );
}
export default FutureWeather;


// function FutureWeather({ getNewWeather, weatherData }) {
  
//   return (
//     <div>
//       {weatherData?.list?.map((future) => (
//         <div>
//           <p>{future?.dt_txt?.split(" ")[1].slice(0, 5)}</p>
//           <WeatherIcon>{future.weather[0].id}</WeatherIcon>
//           <p>{future.main.temp.toFixed()}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FutureWeather;