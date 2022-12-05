import { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({ cart, setCart, clear, del, totalQ }) => {
  const suma = (c) => {
    const newCart = cart.filter((element) => element.title !== c.title);
    let previousQ = cart.find((element) => element.title === c.title).cantidad;
    c.cantidad = previousQ + 1;
    setCart([...newCart, c]);
  };

  const resta = (c) => {
    const newCart = cart.filter((element) => element.title !== c.title);
    let previousQ = cart.find((element) => element.title === c.title).cantidad;
    c.cantidad > 0 ? (c.cantidad = previousQ - 1) : (c.cantidad = previousQ);
    setCart([...newCart, c]);
  };

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
                            {c.cantidad > 0 && (
                              <Button onClick={() => resta(c)}>-</Button>
                            )}
                            {c.cantidad <= 0 && (
                              <Button className="btn-danger" onClick={() => resta(c)}>
                                -
                              </Button>
                            )}
                            {c.cantidad} <Button onClick={() => suma(c)}>+</Button>{" "}
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
