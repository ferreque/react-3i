import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login({ login }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loginOk, setLoginOk] = useState("");
  const navigate = useNavigate();

  const handleValidation = (e) => {
    e.preventDefault();
    setLoginOk({ name: null, role: null });
    fetch("https://node-3i.vercel.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: mail, password: pass }),
    })
      .then((res) => res.json())
      .then((json) => setLoginOk({ name: json.name, role: json.rol }))
      .catch((error) => setLoginOk({ name: null, role: false }));
  };

  useEffect(() => {
    alert(
      "Página de prueba! para iniciar sesion como usuario utilice el email: user@user.com, como administrador: admin@admin.com. En ambos casos la contraseña es 123456"
    );
  }, []);

  useEffect(() => {
    if (loginOk.role) {
      login(mail, loginOk.role);
      navigate("/");
      toast(`Bienvenido ${mail}!`, { autoClose: 1500 });
    } else if (loginOk.role === false) {
      toast(`Credenciales incorrectas`, { autoClose: 1500 });
    }
  }, [loginOk]);

  return (
    <Container className="mt-5">
      <Form>
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
        <span className="ms-3">
          Sí no tenés usuario, <Link to="/signup">click aquí</Link> para registrarte.
        </span>
      </Form>
    </Container>
  );
}

export default Login;
