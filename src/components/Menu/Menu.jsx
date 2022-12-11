import React, { useState } from "react";
import "./styles.css";

export function Menu({ name, children }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="Menu">
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {name}
        <div>{toggle && children}</div>
      </div>
      {toggle ? (
        <i className="fa fa-arrow-down" aria-hidden="true" />
      ) : (
        <i className="fa fa-arrow-right" aria-hidden="true" />
      )}
    </div>
  );
}
