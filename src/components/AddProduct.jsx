import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddProduct({ show, setShow }) {
  const navegate = useNavigate();
  const [newName, setNewName] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newCategory, setNewCategory] = useState();
  const [newImage, setNewImage] = useState();
  const [newProduct, setNewProduct] = useState(null);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault;
    setNewProduct(null);
    fetch("https://node-3i.vercel.app/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newName,
        price: newPrice,
        description: newDescription,
        category: newCategory,
        image: newImage || "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => setNewProduct(true))
      .catch((error) => setNewProduct(false));
  };
  useEffect(() => {
    if (newProduct) {
      toast("Producto Agregado!");
      setShow(false);
    } else if (newProduct === false) {
      toast("Algo ha salido mal ...");
    }
  }, [newProduct]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              value={newName}
              placeholder="Nombre del producto"
              type="text"
              onChange={(e) => setNewName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              value={newPrice}
              placeholder="Precio del producto"
              type="number"
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              value={newDescription}
              placeholder="Descripcion del producto"
              type="text"
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategorie">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              as="textarea"
              value={newCategory}
              placeholder="Categoria del producto"
              type="text"
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              as="textarea"
              value={newImage}
              placeholder="URL de imagen del producto"
              type="text"
              onChange={(e) => setNewImage(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
            Guardar Producto
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProduct;
