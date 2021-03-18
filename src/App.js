import { useEffect, useState } from "react";
import Formalurio from "./componentes/Formulario";
import InfoParada from "./componentes/InfoParada";
import OcultarContext from "./contexts/OcultarContext";
import LineasContext from "./contexts/LineasContext";
import ejemplo from "./ejemplo.json";
import BuscarParadaContext from "./contexts/BuscarParadaContext";
import useFetch from "./hooks/useFetch";

function App() {
  const { datos: parada, pedirDatos: pedirParada } = useFetch();
  const { datos: lineas, pedirDatos: pedirLineas } = useFetch();
  const [datosApi, setDatosAPi] = useState(ejemplo);
  const [numeroParada, setNumeroParada] = useState("");
  const [numeroLinea, setNumeroLinea] = useState(0);
  const [ocultarFrase, setOcultarFrase] = useState(true);
  const [tiempo, setTiempo] = useState(0);
  const { data: { ibus } } = datosApi;

  useEffect(() => {
    if (numeroParada) {
      pedirParada(`https://api.tmb.cat/v1/transit/parades/${numeroParada}?app_id=2e664cd9&app_key=1467b472741cc9c864924b643009e7e4`);
    }
  }, [numeroParada, pedirParada]);

  useEffect(() => {
    if (parada) {
      pedirLineas(`https://api.tmb.cat/v1/ibus/stops/${numeroParada}?app_id=2e664cd9&app_key=1467b472741cc9c864924b643009e7e4`);
    }
  }, [numeroParada, parada, pedirLineas]);


  return (
    <BuscarParadaContext.Provider value={{ ibus, numeroParada, parada, lineas, setNumeroParada, setOcultarFrase }}>
      <LineasContext.Provider value={{ ibus, numeroLinea, tiempo, setTiempo, setNumeroLinea }}>
        <OcultarContext.Provider value={ocultarFrase}>
          <div className="contenedor">
            <InfoParada />
            <Formalurio />
          </div>
        </OcultarContext.Provider>
      </LineasContext.Provider>
    </BuscarParadaContext.Provider>
  );
}

export default App;
