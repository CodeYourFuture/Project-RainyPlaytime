import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  return (
    <div className="App">
      <Header title={siteTitle} />
      <main className="c-site-main" tabIndex="0">
        <img
          className="weather-img"
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          alt="Current Weather"
        />
        {/* fetch the data
        images
        current Weather
        future Weather */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
