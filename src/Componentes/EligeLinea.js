import { useContext } from "react";
import OcultarContext from "../contexts/OcultarContext";
import ParadasContext from "../contexts/ParadasContext";

const EligeLinea = () => {
  const ocultarFrase = useContext(OcultarContext);
  const paradas = useContext(ParadasContext);
  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea">
        <option value="">Elige línea</option>
        {paradas.map(parada => <option value={parada.line} key={parada.routeId}>{parada.line}</option>)}
      </select>
    </form>
  );
};

export default EligeLinea;
