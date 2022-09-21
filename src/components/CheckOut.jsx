import { useState } from "react";
import { Container, Form } from "react-bootstrap";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Container>
      <h2>Formulario</h2>
      <Form.Control size="lg" type="text" placeholder="Nombre y apellido" />
      <br />
      <Form.Control type="text" placeholder="email@email.com" />
      <br />
      <Form.Control size="sm" type="number" placeholder="0034678871919" />
    </Container>
  );
};

export default CheckOut;
