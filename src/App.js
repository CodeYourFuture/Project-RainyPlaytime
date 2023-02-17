import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import FakeWeatherData from "./data/FakeWeather.json";


const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {

  return (
    <div className="App">
      <Header title={siteTitle} />

      <main className="c-site-main" tabIndex="0">
        <div>
          <img
            className="weather-img"
            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
            alt="Current Weather"
          />
        </div>

        

        {/* {FakeWeatherData.list.map((data) => (
          <div key={data.dt}>Temp : {data && data.main.temp}</div>
        ))} */}

        {/* <div>{location}</div> */}
        {/* <div>{temp && temp.list[0].main.temp}</div> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
