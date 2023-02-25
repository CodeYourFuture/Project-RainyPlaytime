import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FutureWeather from "./components/FutureWeather/FutureWeather";
import Icon from './components/Icon/Icon';


//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  return (
    <div className="App">
      <Header title={siteTitle} />
      <main className="c-site-main" tabIndex="0">
        <FutureWeather weatherArray={[1, 2, 3, 4, 5, 6, 7]} />
        <Icon name="clear"/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
