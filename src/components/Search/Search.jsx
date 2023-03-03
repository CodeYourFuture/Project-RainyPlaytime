import React, {useState} from "react";
import axios from "axios"
import './Search.scss'

const Search = ({title, setWeatherInfo}) => {
    const [city, setCity] = useState("")
   
    const API_KEY = process.env.REACT_APP_API_KEY
    console.log('API Key:', API_KEY);
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`
    const handleSubmit = (e) => {
        e.preventDefault()
        
        //API Request using Axios
        getWeatherInfo()
        console.log(city);
    }

    // This function sends an API Request via Axios
    const getWeatherInfo = async () => {
        // axios request
    // try {

    // }
    // catch(err){

    // }
    try {

    
      const resp = await axios.get(API_URL)
      console.log('Response:', resp);
      setWeatherInfo(resp.data.list)
    }
    catch(err){
        console.log('We have An Error');
        console.log(err.message);
        setWeatherInfo([])
        alert("Something went wrong!")
    }
    }

        return (
        <header className="c-site-header">
        <h1 className="c-site-header__title">{title}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            {/*  */}
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button>Search</button>
        </form>

    </header>
    )


}
export default Search;