import React, { useRef, useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import TrainedSkills from "../../components/TrainedSkills/TrainedSkills";
import "./styles.css";

export function Helper(props) {
  const [image, setImage] = useState("");

  const tabImage = useRef();
  const tabTutorial = useRef();
  const tabImageBox = useRef();
  const tabPericias = useRef();

  return (
    <div className="Helper">
      <button
        className="Tutorial"
        onClick={() => {
          tabTutorial.current.style.display = "block";
        }}
      >
        Tutorial
      </button>
      <Menu name="Imagem">
        <button
          onClick={() => {
            tabImageBox.current.style.display = "block";
            tabImage.current.value = "";
          }}
        >
          Adicionar Foto
        </button>
        <button
          onClick={() => {
            setImage("");
          }}
        >
          Remover Foto
        </button>
        <div ref={tabImageBox} className="Npc-Helper-Image">
          <button onClick={() => (tabImageBox.current.style.display = "none")}>
            Fechar
          </button>
          <div className="Npc-Helper-ImageBox">
            <input
              ref={tabImage}
              type="text"
              placeholder="https://imagem.png"
            />
            <button
              onClick={() => {
                setImage(tabImage.current.value);
                tabImageBox.current.style.display = "none";
              }}
            >
              Confirmar
            </button>
          </div>
        </div>
      </Menu>
      <Menu name="Pericias">
        <div className="Helper-Skills">
          {props.pericias.map((e) => {
            if (e.name === null) {
              return null;
            } else {
              return (
                <TrainedSkills
                  name={e.name}
                  pericias={props.pericias}
                  key={e.name}
                  setPericias={props.setPericias}
                />
              );
            }
          })}
        </div>
      </Menu>
      <Menu name="Extras">
        {/* {extras.map((e, i) => (
          <Extras
            name={e.name}
            key={e.name}
            extras={extras}
            setExtras={setExtras}
            number={e.number}
            checked={e.marked}
            index={i}
          />
        ))} */}
      </Menu>
    </div>
  );
}
