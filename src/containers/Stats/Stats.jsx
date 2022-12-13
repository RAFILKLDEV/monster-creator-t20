import React from "react";
import Mana from "../../components/ComboGeneric/ComboGeneric";
import ComboLabel from "../../components/ComboLabel/ComboLabel";
import ComboPericia from "../../components/ComboPericia/ComboPericia";
import "./styles.css";

export function Stats(props) {
  return (
    <div className="Stats">
      {/* // 0 Indice 1 B.ATA 2 Dano.M 3 Defesa 4 R.FORTE 5 R.MEDIA 6 R.FRACA 7 PV 8 CD */}
      <div className="Monster-Stats">
        <ComboPericia
          name="Iniciativa"
          att={props.att}
          nd={props.nd}
          pericias={props.pericias}
        />
        <ComboPericia
          name="Percepção"
          att={props.att}
          nd={props.nd}
          pericias={props.pericias}
        />
      </div>
      <div className="Monster-Defense">
        <ComboLabel name="Defesa" nd={props.nd} n={3} />
        <ComboLabel name="Fort" nd={props.nd} n={3} />
        <ComboLabel name="Ref" nd={props.nd} n={3} />
        <ComboLabel name="Von" nd={props.nd} n={3} />
      </div>
      <div className="Monster-Hp">
        <ComboLabel name="Pontos de Vida" nd={1} n={7} />
      </div>
      <div className="Monster-Extras">
        {props.extras[1].marked && <Mana name="Mana" nd={props.nd} n={7} />}
        {props.extras[0].marked && <ComboLabel name="CD" nd={props.nd} n={8} />}
      </div>
    </div>
  );
}
