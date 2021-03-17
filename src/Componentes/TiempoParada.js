import { useContext, useEffect } from "react";
import OcultarContext from "../contexts/OcultarContext";
import LineasContext from "../contexts/LineasContext";


const TiempoParada = () => {
  const ocultarFrase = useContext(OcultarContext);
  const elegirLinea = useContext(LineasContext);
  const { ibus, numeroLinea, tiempo, setTiempo } = elegirLinea;
  useEffect(() => {
    if (numeroLinea !== 0 && numeroLinea !== "") {
      setTiempo(ibus.filter(bus => bus.line === numeroLinea)[0]["text-ca"]);
    }
  }, [ibus, numeroLinea, setTiempo]);
  return (
    <h2 hidden={ocultarFrase}>Tiempo para la línea {numeroLinea} : {tiempo} </h2>
  );
};

export default TiempoParada;
