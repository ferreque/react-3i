import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login({ auth, setAuth, validate }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    validate(mail, pass);
  };

  return (
    <Form>
      <Container className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onInput={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onInput={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => handleValidation(e)}>
          Submit
        </Button>
      </Container>
    </Form>
  );
}

export default Login;
