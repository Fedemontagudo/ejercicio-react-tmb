import { useContext, useEffect } from "react";
import OcultarContext from "../contexts/OcultarContext";
import ParadasContext from "../contexts/ParadasContext";


const TiempoParada = () => {
  const ocultarFrase = useContext(OcultarContext);
  const elegirLinea = useContext(ParadasContext);
  const { ibus, numeroParada, tiempo, setTiempo } = elegirLinea;
  useEffect(() => {
    if (numeroParada !== 0) {
      setTiempo(ibus.filter(bus => bus.line === numeroParada)[0]["text-ca"]);
    }
  }, [ibus, numeroParada, setTiempo]);


  return (
    <h2 hidden={ocultarFrase}>Tiempo para la línea {numeroParada} : {tiempo} </h2>
  );
};

export default TiempoParada;
