import DisplayParada from "./DisplayParada";
import NombreParada from "./NombreParada";
import TiempoParada from "./TiempoParada";

const InfoParada = () => {
  return (
    <header className="cabecera">
      <NombreParada />
      <DisplayParada />
      <TiempoParada />
    </header>
  );
};
export default InfoParada;
