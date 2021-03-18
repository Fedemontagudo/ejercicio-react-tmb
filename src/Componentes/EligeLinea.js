import { useContext } from "react";
import OcultarContext from "../contexts/OcultarContext";
import LineasContext from "../contexts/LineasContext";

const EligeLinea = () => {
  const ocultarFrase = useContext(OcultarContext);
  const lineasParadaBus = useContext(LineasContext);
  const { lineas, setNumeroLinea } = lineasParadaBus;
  const elegirLinea = e => setNumeroLinea(e.target.value);
  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select onChange={elegirLinea} id="tiempo-linea">
        <option value="">Elige línea</option>
        {
          ocultarFrase === false && lineas.data.ibus.map(linea => <option value={linea.line} key={linea.routeId}>{linea.line}</option>)
        }
      </select>
    </form >
  );
};

export default EligeLinea;
