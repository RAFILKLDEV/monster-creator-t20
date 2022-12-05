import "./App.css";
import { Info } from "./containers/Info/Info";
import { Stats } from "./containers/Stats/Stats";

function App() {
  return (
    <div className="App">
      {/* <div className="Teste">
        <img
          src="https://www.socialdub.com/groupspictures/7888/7888808021751257996.jpg?x2"
          alt=""
          width={400}
          height={400}
        />
        <img
          src="https://www.socialdub.com/groupspictures/7888/7888808021751257996.jpg?x2"
          alt=""
          width={400}
          height={400}
        />
      </div> */}
      <div className="Monster-Creator">
        <Info />
        <Stats />
        <Stats />
        <Stats />
        <Stats />
        <div className="Attribute"></div>
        <div className="Combat"></div>
        <div className="Extras"></div>
      </div>
    </div>
  );
}

export default App;
