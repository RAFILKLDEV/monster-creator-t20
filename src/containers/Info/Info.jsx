import React, { useState } from "react";
import { tabela } from "../../constants";
import "./styles.css";

export function Info(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const incrementar = () => {
    if (props.nd === 20) {
      return;
    }
    props.setNd(props.nd + 1);
  };

  const decrementar = () => {
    if (props.nd === 0) {
      return;
    }
    props.setNd(props.nd - 1);
  };

  return (
    <div className="Info">
      <div className="Monster-Info">
        <div className="Monster-Bar">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Monstro"
          />
          <div className="Monster-Nd">
            <button onClick={decrementar}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <div>{tabela[props.nd][0]}</div>
            <button onClick={incrementar}>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="Monster-Desc">
        {props.image && (
          <img src={props.image} alt={props.name} width={500} height={400} />
        )}
        <textarea
          placeholder="Descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="Monster-Desc-Select">
          <select>
            <option>Animais</option>
            <option>Constructos</option>
            <option>Espiritos</option>
            <option>Humanoides</option>
            <option>Monstros</option>
            <option>Mortos-Vivos</option>
          </select>
          <select>
            <option>Solo</option>
            <option>Lacaio</option>
            <option>Especial</option>
          </select>
        </div>
      </div>
    </div>
  );
}
