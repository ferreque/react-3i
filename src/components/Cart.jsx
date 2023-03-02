import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, clear, del, totalQ, totalPrice }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="primary" onClick={handleShow}>
        <div>
          <Row>
            <div className="col-8">
              <img src="/img/carri.png" alt="img-carrito" height="30px" />
            </div>
            {totalQ() === 0 ? (
              <div className="col-4 rounded-circle rounded-5 bg-dangernpm">
                {totalQ()}
              </div>
            ) : (
              <div className="col-4 rounded-circle rounded-5 bg-success">{totalQ()}</div>
            )}
          </Row>
        </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
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
                      {c.cantidad > 0 && <Button onClick={() => resta(c)}>-</Button>}
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
            <h4>Cantidad total: {totalQ()}</h4>
            <h2>Precio total: {totalPrice()}</h2>
            <Button className="btn-danger col-6 mb-3 mx-auto" onClick={() => clear()}>
              Eliminar Todo
            </Button>
            <Container className="d-flex justify-content-center align-items-center">
              <Link to={"/checkout"}>
                <Button className="btn-success mx-auto">Comprar!</Button>
              </Link>
            </Container>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
