import React from "react";
import ComboLabel from "../../components/ComboLabel/ComboLabel";
import ComboPericia from "../../components/ComboPericia/ComboPericia";
import "./styles.css";

export function Stats(props) {
  return (
    <div className="Stats">
      {/* // 0 Indice 1 B.ATA 2 Dano.M 3 Defesa 4 R.FORTE 5 R.MEDIA 6 R.FRACA 7 PV 8 CD */}
      <div className="Monster-Stats">
        <ComboPericia name="Iniciativa" att={props.att} nd={props.nd} />
        <ComboPericia name="Percepção" att={props.att} nd={props.nd} />
      </div>
      <div className="Monster-Defense">
        <ComboLabel name="Defesa" nd={1} n={3} />
        <ComboLabel name="Fort" nd={1} n={3} />
        <ComboLabel name="Ref" nd={1} n={3} />
        <ComboLabel name="Von" nd={1} n={3} />
      </div>
      <div className="Monster-Hp">
        <ComboPericia name="Pontos de Vida" att={props.att} nd={props.nd} />
        <ComboPericia name="Mana" att={props.att} nd={props.nd} />
        <ComboPericia name="Deslocamneto" att={props.att} nd={props.nd} />
      </div>
    </div>
  );
}
