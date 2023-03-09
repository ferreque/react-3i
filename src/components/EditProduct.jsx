import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

function EditProduct({
  show,
  setShow,
  handleSubmit,
  editName,
  setEditName,
  editDescription,
  setEditDescription,
  editPrice,
  setEditPrice,
}) {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
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
    </Modal>
  );
}

export default EditProduct;
