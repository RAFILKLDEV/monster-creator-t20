import { useRef, useState } from "react";
import Attribute from "./containers/Attribute/Attribute";
import { Info } from "./containers/Info/Info";
import { Stats } from "./containers/Stats/Stats";
import Skills from "./containers/Skills/Skills";
import "./App.css";
import { Combat } from "./containers/Combat/Combat";
import { Helper } from "./containers/Helper/Helper";

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
    { name: "Atuação", trained: true, mod: "CAR" },
    { name: "Cavalgar", trained: false, mod: "DES" },
    { name: "Conhecimento", trained: false, mod: "INT" },
    { name: "Cura", trained: true, mod: "SAB" },
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

  const tabPericias = useRef();
  const tabAbout = useRef();

  return (
    <div className="App">
      <Helper />
      {/* <div className="Npc-Helper">
        <div>
          <div className="Npc-Helper-Title">Pericias</div>
          <button onClick={() => (tabPericias.current.style.display = "block")}>
            Pericias
          </button>
          <div ref={tabPericias} className="Npc-Helper-Pericias">
            <button
              onClick={() => (tabPericias.current.style.display = "none")}
            >
              Fechar
            </button>
            <div className="Npc-Helper-List">
              {pericias.map((e) => {
                if (e.name === null) {
                  return null;
                } else {
                  return (
                    <Pericias
                      name={e.name}
                      pericias={pericias}
                      key={e.name}
                      setPericias={setPericias}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="Npc-Helper-Title">Extras</div>
        </div>
        {extras.map((e, i) => (
          <Extras
            name={e.name}
            key={e.name}
            extras={extras}
            setExtras={setExtras}
            number={e.number}
            checked={e.marked}
            index={i}
          />
        ))}

        <div>
          <div className="Npc-Helper-Title">Criar Ficha</div>
          <button onClick={() => {}}>Criar Png</button>
        </div>
      </div> */}
      <div className="Monster-Creator">
        <Info nd={nd} setND={setNd} />
        <Stats nd={nd} att={att} pericias={pericias} />
        <Attribute att={att} setAtt={setAtt} />
        <Skills nd={nd} att={att} pericias={pericias} />
        <Combat />
        <div className="Extras"></div>
      </div>
    </div>
  );
}

export default App;
