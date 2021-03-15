import { useEffect, useState } from "react";
import Formalurio from "./componentes/Formulario";
import InfoParada from "./componentes/InfoParada";
import OcultarContext from "./contexts/OcultarContext";
import ParadasContext from "./contexts/ParadasContext";
import ejemplo from "./ejemplo.json";

function App() {
  const [datosApi, setDatosAPi] = useState(ejemplo);
  const [lineas, setLineas] = useState([]);
  const [numeroParada, setNumeroParada] = useState(0);
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const { data } = datosApi;
  const { ibus, ibus: { line, destination } } = data;

  return (
    <ParadasContext.Provider value={ibus}>
      <OcultarContext.Provider value={ocultarFrase}>
        <div className="contenedor">
          <InfoParada />
          <Formalurio />
        </div>
      </OcultarContext.Provider>
    </ParadasContext.Provider>
  );
}

export default App;
