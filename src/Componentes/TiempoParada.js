import { useContext, useEffect } from "react";
import OcultarContext from "../contexts/OcultarContext";
import LineasContext from "../contexts/LineasContext";


const TiempoParada = () => {
  const ocultarFrase = useContext(OcultarContext);
  const elegirLinea = useContext(LineasContext);
  const { lineas, numeroLinea, tiempo, setTiempo } = elegirLinea;
  useEffect(() => {
    if (numeroLinea !== 0 && numeroLinea !== "") {
      setTiempo(lineas.data.ibus.filter(bus => bus.line === numeroLinea)[0]["text-ca"]);
    }
  }, [lineas, numeroLinea, setTiempo]);
  return (
    <h2 hidden={ocultarFrase}>Tiempo para la línea {numeroLinea} : {tiempo} </h2>
  );
};

export default TiempoParada;
