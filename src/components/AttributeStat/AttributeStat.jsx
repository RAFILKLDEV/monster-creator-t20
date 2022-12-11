/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const AttributeStat = (props) => {
  const [valor, setValor] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    const values = { ...props.att };

    switch (props.name) {
      case "FOR":
        values.FOR = Number(valor);
        break;
      case "DES":
        values.DES = Number(valor);
        break;
      case "CON":
        values.CON = Number(valor);
        break;
      case "INT":
        values.INT = Number(valor);
        break;
      case "SAB":
        values.SAB = Number(valor);
        break;
      case "CAR":
        values.CAR = Number(valor);
        break;

      default:
    }

    props.setAtt(values);
  }, [valor]);

  return (
    <div
      className="ComboLabel"
      style={{
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      <div className="ComboLabel-Label">{props.name} : </div>
      <input
        ref={inputRef}
        type="number"
        onChange={(e) => {
          inputRef.current.style.width = "22px";
          inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
          setValor(e.target.value);
        }}
        value={valor}
      ></input>
    </div>
  );
};

export default AttributeStat;
