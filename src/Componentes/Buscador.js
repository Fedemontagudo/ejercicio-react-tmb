import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import BuscarParadaContext from "../contexts/BuscarParadaContext";
import useFetch from "../hooks/useFetch";

const Buscador = () => {
  const buses = useContext(BuscarParadaContext);
  const { numeroParada, setNumeroParada, parada, lineas, setOcultarFrase } = buses;

  const cambiarInput = e => {
    setNumeroParada(e.target.value);
  };
  const buscarParada = (e) => {
    e.preventDefault();
    if (parada) {
      if (parada.numberMatched === 0) {
        setNumeroParada(`${numeroParada} no existe`);
      } else {
        setNumeroParada(parada.features[0].properties.CODI_PARADA);
        setOcultarFrase(false);
      }
    }
  };
  return (
    <Form.Group as={"form"} onSubmit={buscarParada}>
      <Form.Label htmlFor="num-parada">Parada nº: </Form.Label>
      <input type="number" id="num-parada" value={numeroParada} onChange={cambiarInput} />
      <Button type="submit">Buscar</Button>
    </Form.Group>
  );
};

export default Buscador;
