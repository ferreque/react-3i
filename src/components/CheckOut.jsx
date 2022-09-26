import { useState, useEffect } from "react";
import { Card, Container, Form } from "react-bootstrap";
import validator from "validator";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstValidationName, setFirstValidationName] = useState(false);
  const [firstValidationMail, setFirstValidationMail] = useState(false);

  const [firstValidationPhone, setFirstValidationPhone] = useState(false);

  // let nameOk = false;
  // let mailOk = false;
  // let phoneOk = false;

  const saveName = (e) => {
    setName(e.target.value);
  };
  const validateName = (n) => {
    return validator.matches(n, "^[a-zA-Z ]+$");
  };
  const saveMail = (e) => {
    setMail(e.target.value);
  };
  const validateMail = (m) => {
    return validator.isEmail(m);
  };
  const savePhone = (e) => {
    setPhone(e.target.value);
  };

  const validatePhone = (p) => {
    return validator.isMobilePhone(p);
  };

  const handleBuy = () => {
    if (validateName(name) && validateMail(mail) && validatePhone(phone)) {
      console.log("VALIDADO");
    } else {
      setFirstValidationMail(true);
      setFirstValidationName(true);
      setFirstValidationPhone(true);
      console.log("NO VALIDADO");
    }
  };

  // useEffect(() => {

  // }, [name, mail, phone]);

  return (
    <Container>
      <h2>Formulario</h2>
      <Card className="p-3">
        <Form.Label>
          Nombre y Apellido{" "}
          {!validateName(name) && firstValidationName && (
            <span className="text-danger">Solo letras y espacios</span>
          )}
        </Form.Label>{" "}
        <Form.Control
          size="lg"
          type="text"
          placeholder="Juan Sanchez"
          onChange={saveName}
          maxLength="50"
          onBlur={() => setFirstValidationName(true)}
        />
        <br />
        <Form.Label>
          Email{" "}
          {!validateMail(mail) && firstValidationMail && (
            <span className="text-danger">El email no es valido</span>
          )}
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="email@email.com"
          onChange={saveMail}
          maxLength="50"
          onBlur={() => setFirstValidationMail(true)}
        />
        <br />
        <Form.Label>
          Telefono{" "}
          {!validatePhone(phone) && firstValidationPhone && (
            <span className="text-danger">Numero invalido</span>
          )}
        </Form.Label>
        <Form.Control
          size="sm"
          type="number"
          placeholder="0034678871919"
          onChange={savePhone}
          maxLength="20"
          onBlur={() => setFirstValidationPhone(true)}
        />
        <button onClick={() => handleBuy()} className="btn btn-primary mt-3">
          Pagar
        </button>
      </Card>
    </Container>
  );
};

export default CheckOut;
