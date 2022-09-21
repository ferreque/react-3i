import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center flex-column align-items-center m-auto">
      <Spinner animation="grow" />
      <span>Cargando...</span>
    </Container>
  );
};

export default Loader;
