import { Button, Form } from "react-bootstrap";

const Buscador = () => {
  return (
    <Form.Group>
      <Form.Label htmlFor="num-parada">Parada nº: </Form.Label>
      <input type="number" id="num-parada" /* value={numeroParada} */ />
      <Button type="submit">Buscar</Button>
    </Form.Group>
  );
};

export default Buscador;
