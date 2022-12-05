import "./App.css";
import { Info } from "./containers/Info/Info";
import { Stats } from "./containers/Stats/Stats";

function App() {
  return (
    <div className="App">
      <div className="Monster-Creator">
        <Info />
        <Stats />
        <div className="Attribute"></div>
        <div className="Combat"></div>
        <div className="Extras"></div>
      </div>
    </div>
  );
}

export default App;
