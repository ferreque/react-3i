import { Button, Card, Container, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";

const ProductDetail = ({ product, add, auth }) => {
  const [contador, setContador] = useState(1);
  const [newTitle, setNewTitle] = useState(product.title);
  const [newPrice, setNewPrice] = useState(product.price);
  const [newDescription, setNewDescription] = useState(product.description);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="m-2 border-2 h-100">
      <Container className="d-flex justify-content-center align-items-center">
        <Card.Img src={product.image} variant={top} style={{ width: "100px" }} />
      </Container>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      {auth.role !== "admin" ? (
        <>
          <Card.Footer className="border-0">
            <Container className="d-flex justify-content-center align-items-center">
              <ProductCounter contador={contador} setContador={setContador} />
              <Button
                variant="success"
                size="sm"
                onClick={() =>
                  add({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    cantidad: contador,
                  })
                }
              >
                Agregar al carrito
              </Button>
            </Container>
          </Card.Footer>
          <Card.Footer>
            <Container className="d-flex justify-content-center align-items-center">
              <Link to="/checkout">
                <Button>Ir al Carrito</Button>
              </Link>
            </Container>
          </Card.Footer>
        </>
      ) : (
        <Card.Footer>
          <Container className="d-flex justify-content-center align-items-center ">
            <Button className="mx-2" variant="primary" onClick={handleShow}>
              Editar Producto
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Editar Producto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter title"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter price"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />

                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      placeholder="Enter description"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            <Button className="mx-2" variant="primary" onClick={handleShow}>
              Borrar Producto
            </Button>
          </Container>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ProductDetail;
