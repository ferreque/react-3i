import React, { useState, useEffect } from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(null);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    rol: "USER_ROLE",
  });
  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.password && formValue.password2) {
      if (formValue.password === formValue.password2) {
        fetch("https://node-3i.vercel.app/users/register", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: formValue.name,
            mail: formValue.email,
            password: formValue.password,
            rol: formValue.rol,
          }),
        })
          .then((res) => res.json())
          .then((json) => setNewUser(true))
          .catch((error) => setNewUser(false));
      } else {
        return alert("Las constraseñas deben ser iguales");
      }
    } else {
      return alert("Debe completar todos los campos");
    }
  };
  useEffect(() => {
    if (newUser) {
      toast("Usuario creado!");
      navigate("/login");
    } else if (newUser === false) {
      toast("Algo ha salido mal ...");
    }
  }, [newUser]);

  return (
    <Container fluid className="background-up">
      <Row className="">
        <div className="col d-flex justify-content-center">
          <h1 className="mt-2 text-white font-weight-bolder">REGISTRO</h1>
        </div>
      </Row>
      <Row>
        <div className="col">
          <Form
            className="card-body bg-white col-8 col-lg-5 mx-auto"
            onSubmit={handleSubmit}
          >
            <Form.Label className="">Nombre de Usuario:</Form.Label>
            <Form.Control
              name="name"
              value={formValue.name}
              onChange={handleChange}
              required
              type="text"
              maxLength={70}
            />

            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label className="">Escribí tu mail:</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={formValue.email}
                required
                onChange={handleChange}
                autoComplete="email"
                maxLength={50}
              />
            </Form.Group>

            <Form.Group className="mb-3 mx-auto text-dark" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={formValue.password}
                required
                onChange={handleChange}
                maxLength={50}
              />
            </Form.Group>

            <Form.Group className="mb-3 mx-auto ">
              <Form.Label>Confirma tu contraseña:</Form.Label>
              <Form.Control
                name="password2"
                type="password"
                value={formValue.password2}
                required
                onChange={handleChange}
                maxLength={50}
              />
            </Form.Group>
            <Row>
              <Button
                variant="primary"
                type="submit"
                className="mb-3 btn btn-success rounded login-btn col-4 mx-auto"
                onClick={(e) => handleSubmit(e)}
              >
                CREAR CUENTA
              </Button>
              <Button className="mb-3 btn btn-success rounded login-btn col-4 mx-auto">
                <a href="../login" className="text-white">
                  LOGIN
                </a>
              </Button>
            </Row>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Registro;
