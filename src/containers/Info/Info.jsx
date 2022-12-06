import React, { useState } from "react";
import "./styles.css";

export function Info() {
  const [name, setName] = useState("Dragão Negro de Olhos Vermelhos");
  return (
    <div className="Info">
      <div className="Monster-Info">
        <div className="Monster-Bar">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="Monster-Nd">5</div>
        </div>
      </div>
      <div className="Monster-Desc">
        <img
          src="https://www.socialdub.com/groupspictures/7888/7888808021751257996.jpg?x2"
          alt=""
          width={500}
          height={400}
        />
        <textarea />
        <div>
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
