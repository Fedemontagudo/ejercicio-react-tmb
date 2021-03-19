import { useContext, useEffect, useState } from "react";
import BuscarParadaContext from "../contexts/BuscarParadaContext";
import OcultarContext from "../contexts/OcultarContext";

const DisplayParada = () => {
  const bus = useContext(BuscarParadaContext);
  const ocultarFrase = useContext(OcultarContext);
  const { lineas } = bus;
  const [topLineasParada, setTopLineasParada] = useState(0);
  useEffect(() => {
    let numeroDeRepeticiones = 0;
    const intervalMovimiento = setInterval(() => {
      setTopLineasParada((top) => top - 30);
      numeroDeRepeticiones++;
      if (lineas) {
        if (numeroDeRepeticiones === lineas.data.ibus.length) {
          numeroDeRepeticiones = 0;
          setTopLineasParada(0);
          clearInterval(intervalMovimiento);
        }
      }
    }, 5000);
  }, [lineas]);
  return (
    <div className="display">
      {
        (lineas && ocultarFrase === false) && lineas.data.ibus.map(bus =>
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
