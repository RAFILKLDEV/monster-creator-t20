import React from "react";
import ComboLabel from "../../components/ComboLabel/ComboLabel";

export function Stats() {
  return (
    <div className="Stats">
      {/* // 0 Indice 1 B.ATA 2 Dano.M 3 Defesa 4 R.FORTE 5 R.MEDIA 6 R.FRACA 7 PV 8 CD */}

      <ComboLabel name="Defesa" nd={1} n={3}/>
    </div>
  );
}
