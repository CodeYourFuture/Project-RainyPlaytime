import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  return (
    <div className="App">
      <Header title={siteTitle} />
      <button> FIND WEATHER</button>

      <main className="c-site-main" tabIndex="0">
      </main>
      <Footer />
    </div>
  );
}

export default App;
