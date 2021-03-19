import { useContext } from "react";
import BuscarParadaContext from "../contexts/BuscarParadaContext";


const NombreParada = () => {
  const buses = useContext(BuscarParadaContext);
  const { numeroParada } = buses;
  return (
    <h1>Parada nº {numeroParada}</h1>
  );
};

export default NombreParada;
