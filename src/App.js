import { useEffect, useState } from "react";
import Formalurio from "./componentes/Formulario";
import InfoParada from "./componentes/InfoParada";
import OcultarContext from "./contexts/OcultarContext";
import LineasContext from "./contexts/LineasContext";
import ejemplo from "./ejemplo.json";

function App() {
  const [datosApi, setDatosAPi] = useState(ejemplo);
  const [lineas, setLineas] = useState([]);
  const [numeroLinea, setNumeroLinea] = useState(0);
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const [tiempo, setTiempo] = useState(0);
  const { data } = datosApi;
  const { ibus, ibus: { line, destination } } = data;

  return (
    <LineasContext.Provider value={{ ibus, numeroLinea, tiempo, setTiempo, setNumeroLinea }}>
      <OcultarContext.Provider value={ocultarFrase}>
        <div className="contenedor">
          <InfoParada />
          <Formalurio />
        </div>
      </OcultarContext.Provider>
    </LineasContext.Provider>
  );
}

export default App;
