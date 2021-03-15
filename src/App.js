import { useEffect, useState } from "react";
import Formalurio from "./componentes/Formulario";
import InfoParada from "./componentes/InfoParada";
import OcultarContext from "./contexts/OcultarContext";
import ejemplo from "./ejemplo.json";

function App() {
  const [datosApi, setDatosAPi] = useState(ejemplo);
  const [lineas, setLineas] = useState([]);
  const [numeroParada, setNumeroParada] = useState(0);
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const { data } = datosApi;
  const { ibus: { line, destination } } = data;
  return (
    <OcultarContext.Provider value={ocultarFrase}>
      <div className="contenedor">
        <InfoParada />
        <Formalurio />
      </div>
    </OcultarContext.Provider>
  );
}

export default App;
