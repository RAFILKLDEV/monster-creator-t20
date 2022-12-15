import { useState } from "react";
import { Attribute } from "./containers/Attribute/Attribute";
import { Info } from "./containers/Info/Info";
import { Stats } from "./containers/Stats/Stats";
import { Skills } from "./containers/Skills/Skills";
import { Combat } from "./containers/Combat/Combat";
import { Helper } from "./containers/Helper/Helper";
import "./App.css";

function App() {
  const [nd, setNd] = useState(0);
  const [image, setImage] = useState("");
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
  const [extras, setExtras] = useState([
    { name: "CD", marked: false, number: null },
    { name: "Mana", marked: false, number: null },
    { name: "Corpo-a-Corpo", marked: true, number: null },
    { name: "A Distancia", marked: false, number: null },
    { name: "Habilidades", marked: false, number: null },
    { name: "Equipamentos", marked: false, number: null },
    { name: "Tesouros", marked: false, number: null },
  ]);

  return (
    <div className="App">
      <Helper
        pericias={pericias}
        setPericias={setPericias}
        extras={extras}
        setExtras={setExtras}
        setImage={setImage}
      />
      <div id="Monster">
        <div className="Monster-Creator">
          <Info nd={nd} setNd={setNd} image={image} />
          <Stats nd={nd} att={att} pericias={pericias} extras={extras} />
          <Attribute att={att} setAtt={setAtt} />
          <Skills nd={nd} att={att} pericias={pericias} />
          <Combat extras={extras} nd={nd} />
          <div className="Extras"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
