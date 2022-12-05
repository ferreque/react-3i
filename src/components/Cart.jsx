import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({ cart, clear, del, totalQ }) => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand}>
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Carrito
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {cart.map((c, i) => (
                    <li key={i}>
                      <Row>
                        <ul className="d-flex">
                          <span className="col-6">
                            {c.title}
                            {c.price}{" "}
                          </span>{" "}
                          <span className="col-6 d-flex align-items-center justify-content-evenly">
                            <Button>-</Button> {c.cantidad} <Button>+</Button>{" "}
                            <Button onClick={() => del(c)} className="btn-danger">
                              x
                            </Button>
                          </span>
                        </ul>
                      </Row>
                    </li>
                  ))}
                  {cart.length === 0 && <p>Carrito vacío</p>}
                  <h1>Cantidad total: {totalQ()}</h1>
                  <Button
                    className="btn-danger col-6 mb-3 mx-auto"
                    onClick={() => clear()}
                  >
                    Eliminar Todo
                  </Button>
                  <Button className="btn-success col-6 mx-auto">Comprar!</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Cart;
