import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function EditUser({ show, setShow, user }) {
  const navegate = useNavigate();
  const [editName, setEditName] = useState(user.name);
  const [editMail, setEditMail] = useState(user.mail);
  const [editRol, setEditRol] = useState(user.rol);
  const [submitOk, setSubmitOk] = useState(null);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setEditName(user.name);
    setEditMail(user.mail);
    setEditRol(user.rol);
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitOk(null);
    fetch("https://node-3i.vercel.app/users/" + user._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: editName,
        mail: editMail,
        rol: editRol,
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
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={editName}
              placeholder="Nombre de usuario"
              type="text"
              onChange={(e) => setEditName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={editMail}
              placeholder="Email de usuario"
              type="mail"
              onChange={(e) => setEditMail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Rol</Form.Label>

            <Form.Select
              value={editRol}
              type="text"
              onChange={(e) => setEditRol(e.target.value)}
            >
              <option>ADMIN_ROLE</option>
              <option>USER_ROLE</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary" onClick={(e) => handleSubmit(e)}>
            Guardar
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

export default EditUser;
