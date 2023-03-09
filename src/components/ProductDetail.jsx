import { Button, Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCounter from "./ProductCounter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EditProduct from "./EditProduct";

const ProductDetail = ({ product, add, auth }) => {
  const [contador, setContador] = useState(1);

  const handleShow = () => setShow(true);

  const [deleteProd, setDeleteProd] = useState(null);
  const [show, setShow] = useState(false);
  const navegate = useNavigate();

  const deleteProduct = (e) => {
    setDeleteProd(null);
    let validar = window.confirm(
      `Esta seguro que desea eliminar el producto ${product.name}?`
    );
    if (validar) {
      fetch("https://node-3i.vercel.app/products/" + product._id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((json) => setDeleteProd(true))
        .catch((error) => setDeleteProd(false));
    }
  };
  useEffect(() => {
    if (deleteProd) {
      toast("Producto eliminado!");
      navegate("/");
    } else if (deleteProd === false) {
      toast("Algo ha salido mal ...");
    }
  }, [deleteProd]);

  const comments = [
    { user: "user1", comment: "Comentario uno" },
    { user: "user2", comment: "Comentario dos" },
    { user: "user3", comment: "Comentario tres" },
  ];

  const addComment = (e) => {
    console.log("addComment");
  };

  return (
    <>
      <Card className="m-1 h-100 border-0">
        <Container className="d-flex justify-content-center align-items-center">
          <Card.Img src={product.image} style={{ width: "100px" }} variant="top" />
        </Container>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        {auth.rol !== "ADMIN_ROLE" && (
          <>
            <Card.Footer className="border-0">
              <Container className="d-flex justify-content-center align-items-center">
                <ProductCounter contador={contador} setContador={setContador} />
                <Button
                  size="sm"
                  variant="success"
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
            <Card.Footer className="border-0">
              <Container className="d-flex justify-content-center align-items-center g-2">
                <Link to="/checkout">
                  <Button size="sm">Ir al Carrito</Button>
                </Link>
                <Button size="sm">Favorito</Button>
              </Container>
            </Card.Footer>
          </>
        )}
        {auth.rol === "ADMIN_ROLE" && (
          <Card.Footer className="border-0">
            <Container className="d-flex justify-content-center align-items-center">
              <Button className="mx-2" size="sm" onClick={handleShow}>
                [ADMIN] Editar
              </Button>

              <Button className="mx-2" size="sm" onClick={deleteProduct}>
                [ADMIN] Borrar
              </Button>
            </Container>
          </Card.Footer>
        )}
      </Card>
      <Container>
        <input className="w-100" placeholder="Ingrese su comentario" type="text" />
        <Button onClick={() => addComment(estado)}>Enviar</Button>
        {comments.map((comment, i) => (
          <div key={i} className="border">
            <span> {comment.comment}</span> <span> ({comment.user})</span>{" "}
          </div>
        ))}
      </Container>
      <EditProduct product={product} show={show} setShow={setShow} />
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={editName}
                placeholder="Product Name"
                type="text"
                onChange={(e) => setEditName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={editPrice}
                placeholder="Product Price"
                type="number"
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={editDescription}
                placeholder="Product Description"
                type="text"
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
export default ProductDetail;
