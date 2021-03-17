import { useContext } from "react";
import OcultarContext from "../contexts/OcultarContext";
import LineasContext from "../contexts/LineasContext";

const EligeLinea = () => {
  const ocultarFrase = useContext(OcultarContext);
  const lineas = useContext(LineasContext);
  const { ibus, setNumeroLinea } = lineas;
  const elegirLinea = e => setNumeroLinea(e.target.value);
  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirLinea} id="tiempo-linea">
        <option value="">Elige línea</option>
        {ibus.map(linea => <option value={linea.line} key={linea.routeId}>{linea.line}</option>)}
      </select>
    </form >
  );
};

export default EligeLinea;
