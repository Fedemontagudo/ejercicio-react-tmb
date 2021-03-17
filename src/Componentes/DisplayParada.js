import { useContext, useEffect, useState } from "react";
import BuscarParadaContext from "../contexts/BuscarParadaContext";

const DisplayParada = () => {
  const bus = useContext(BuscarParadaContext);
  const { ibus } = bus;
  const [topLineasParada, setTopLineasParada] = useState(0);
  useEffect(() => {
    let numeroDeRepeticiones = 0;
    const intervalMovimiento = setInterval(() => {
      setTopLineasParada((top) => top - 30);
      numeroDeRepeticiones++;
      if (numeroDeRepeticiones === ibus.length) {
        numeroDeRepeticiones = 0;
        setTopLineasParada(0);
      }
    }, 5000);
  }, [ibus.length]);
  return (
    <div className="display">
      {
        ibus.map(bus =>
          <div key={bus.routeId} className="bus" style={{ top: `${topLineasParada}px` }}>
            <span className="linea">{bus.line}</span>
            <span className="destino">{bus.destination}</span>
            <span className="tiempo">{bus["text-ca"]}</span>
          </div>)
      }
    </div>
  );
};

export default DisplayParada;
