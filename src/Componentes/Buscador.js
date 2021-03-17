import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import BuscarParadaContext from "../contexts/BuscarParadaContext";

const Buscador = () => {
  const buses = useContext(BuscarParadaContext);
  const { numeroParada, setNumeroParada } = buses;
  return (
    <Form.Group>
      <Form.Label htmlFor="num-parada">Parada nº: </Form.Label>
      <input type="number" id="num-parada" value={numeroParada} />
      <Button type="submit">Buscar</Button>
    </Form.Group>
  );
};

export default Buscador;
