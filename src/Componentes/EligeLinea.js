import { useContext } from "react";
import OcultarContext from "../contexts/OcultarContext";

const EligeLinea = () => {
  const ocultarFrase = useContext(OcultarContext);
  return (
    <form hidden={ocultarFrase}>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select id="tiempo-linea">
        <option value="">Elige línea</option>
      </select>
    </form>
  );
};

export default EligeLinea;
