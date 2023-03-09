import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EditProduct({ show, setShow, product }) {
  const navegate = useNavigate();
  const [editName, setEditName] = useState(product.title);
  const [editPrice, setEditPrice] = useState(product.price);
  const [editDescription, setEditDescription] = useState(product.description);
  const [submitOk, setSubmitOk] = useState(null);
  useEffect(() => {
    setEditName(product.title);
    setEditPrice(product.price);
    setEditDescription(product.description);
  }, [show]);

  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    setSubmitOk(null);
    fetch("https://node-3i.vercel.app/products/" + product._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: product.category,
        description: editDescription,
        price: editPrice,
        title: editName,
      }),
    })
      .then((res) => res.json())
      .then(() => setSubmitOk(true))
      .catch(() => setSubmitOk(false));
  };
  useEffect(() => {
    if (submitOk) {
      toast("Modificado!");
      setShow(false);
      navegate("/");
    } else if (submitOk === false) {
      toast("Algo ha salido mal ...");
    }
  }, [submitOk]);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              value={editName}
              placeholder="Product Name"
              type="text"
              onChange={(e) => setEditName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              value={editPrice}
              placeholder="Product Price"
              type="number"
              onChange={(e) => setEditPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              value={editDescription}
              placeholder="Product Description"
              type="text"
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" onClick={() => handleSubmit()}>
            Guardar cambios
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProduct;
