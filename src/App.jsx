import { useState } from "react";
import Attribute from "./containers/Attribute/Attribute";
import { Info } from "./containers/Info/Info";
import { Stats } from "./containers/Stats/Stats";
import "./App.css";

function App() {
  const [nd, setNd] = useState(3);
  const [att, setAtt] = useState({
    FOR: 0,
    DES: 0,
    CON: 0,
    INT: 0,
    SAB: 0,
    CAR: 0,
  });
  const [pericias, setPericias] = useState([
    { name: "Acrobacia", trained: false, mod: "DES" },
    { name: "Adestramento", trained: false, mod: "CAR" },
    { name: "Atuação", trained: false, mod: "CAR" },
    { name: "Cavalgar", trained: false, mod: "DES" },
    { name: "Conhecimento", trained: false, mod: "INT" },
    { name: "Cura", trained: false, mod: "SAB" },
    { name: "Diplomacia", trained: false, mod: "CAR" },
    { name: "Enganação", trained: false, mod: "CAR" },
    { name: "Furtividade", trained: false, mod: "DES" },
    { name: "Guerra", trained: false, mod: "INT" },
    { name: "Iniciativa", trained: false, mod: "DES" },
    { name: "Intimidação", trained: false, mod: "CAR" },
    { name: "Intuição", trained: false, mod: "SAB" },
    { name: "Investigação", trained: false, mod: "INT" },
    { name: "Jogatina", trained: false, mod: "CAR" },
    { name: "Ladinagem", trained: false, mod: "DES" },
    { name: "Misticismo", trained: false, mod: "INT" },
    { name: "Nobreza", trained: false, mod: "INT" },
    { name: "Oficio", trained: false, mod: "INT" },
    { name: "Percepção", trained: false, mod: "SAB" },
    { name: "Pilotagem", trained: false, mod: "DES" },
    { name: "Religião", trained: false, mod: "SAB" },
    { name: "Sobrevivência", trained: false, mod: "SAB" },
  ]);

  return (
    <div className="App">
      <div className="Monster-Creator">
        <Info nd={nd} setND={setNd} />
        <Stats nd={nd} att={att} pericias={pericias} />
        <Attribute att={att} setAtt={setAtt} />
        <div className="Attribute"></div>
        <div className="Combat"></div>
        <div className="Extras"></div>
      </div>
    </div>
  );
}

export default App;
