import { useContext } from "react";
import OcultarContext from "../contexts/OcultarContext";

const TiempoParada = () => {
  const ocultarFrase = useContext(OcultarContext);
  return (
    <h2 hidden={ocultarFrase}>Tiempo para la línea 60: 2 minutos</h2>
  );
};

export default TiempoParada;
