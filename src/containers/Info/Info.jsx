import React from "react";

export function Info() {
  return (
    <div className="Info">
      <div className="Monster-Info">
        <div className="Monster-Bar">
          <input type="text" value={"Dragão Negro de Olhos Vermelhos"} />
          <div className="Monster-Nd">5</div>
        </div>
      </div>
      <div className="Monster-Desc">
        <textarea />
        <img
          src="https://www.socialdub.com/groupspictures/7888/7888808021751257996.jpg?x2"
          alt=""
          width={300}
          height={300}
        />
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
