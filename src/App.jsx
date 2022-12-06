import { useState } from "react";
import Attribute from "./containers/Attribute/Attribute";
import { Info } from "./containers/Info/Info";
import { Stats } from "./containers/Stats/Stats";
import "./App.css";

function App() {
  const [nd, setNd] = useState(0);
  const [att, setAtt] = useState({
    FOR: 0,
    DES: 0,
    CON: 0,
    INT: 0,
    SAB: 0,
    CAR: 0,
  });

  return (
    <div className="App">
      <div className="Monster-Creator">
        <Info nd={nd} setND={setNd} />
        <Stats nd={nd} att={att} />
        <Attribute att={att} setAtt={setAtt} />
        <div className="Attribute"></div>
        <div className="Combat"></div>
        <div className="Extras"></div>
      </div>
    </div>
  );
}

export default App;
