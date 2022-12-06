import React, { useState } from "react";
import { pericias } from "../../constants";
import "./styles.css";

const ComboPericia = (props) => {
  const [extra, setExtra] = useState(0);

  function calcNd() {
    if (props.nd === 0 || props.nd === 1) {
      return 0;
    }
    return props.nd - 1;
  }

  return (
    <div className="ComboPericia">
      <span className="ComboLabel-Label">{props.name} :&nbsp;</span>
      <div>
        {Math.floor(calcNd() / 2) + props.att.FOR + Number(extra)}
        <input
          type="number"
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ComboPericia;