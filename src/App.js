import { useState } from "react";
import ejemplo from "./ejemplo.json";
function App() {
  const [datosApi, setDatosAPi] = useState(ejemplo);
  const [lineas, setLineas] = useState([]);
  const [numeroParada, setNumeroParada] = useState(0);
  const { status, data } = datosApi;
  const { ibus } = data;



  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Parada nº 15</h1>
        <div className="display">
          <div className="bus">
            <span className="linea">V16</span>
            <span className="destino">Universitat</span>
            <span className="tiempo">10min</span>
          </div>
          <div className="bus">
            <span className="linea">H12</span>
            <span className="destino">Pla de Palau</span>
            <span className="tiempo">1min</span>
          </div>
          <div className="bus">
            <span className="linea">32</span>
            <span className="destino">Barceloneta</span>
            <span className="tiempo">4min</span>
          </div>
        </div>
        <h2>Tiempo para la línea 60: 2 minutos</h2>
      </header>
      <section className="forms">
        <form>
          <label htmlFor="num-parada">Parada nº: </label>
          <input type="number" id="num-parada" value={numeroParada} />
          <button type="submit">Buscar</button>
        </form>
        <form>
          <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
          <select id="tiempo-linea">
            <option value={lineas}>Elige línea</option>
          </select>
        </form>
      </section>
    </div>
  );
}

export default App;
