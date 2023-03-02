import { useState, useEffect } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";

const CheckOut = ({ cart, totalPrice, del }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstValidationName, setFirstValidationName] = useState(false);
  const [firstValidationMail, setFirstValidationMail] = useState(false);
  const [firstValidationPhone, setFirstValidationPhone] = useState(false);

  const [showMessage, setShowMessage] = useState("");

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
  useEffect(() => {
    if (showMessage) {
      toast.success(`Compra extitosa ID:${showMessage}`);
    }
  }, [showMessage]);

  const handleBuy = () => {
    if (validateName(name) && validateMail(mail) && validatePhone(phone)) {
      const cartToPay = {
        name: name,
        mail: mail,
        phone: phone,
        cart: [...cart, { total: totalPrice() }],
      };
      fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartToPay),
      })
        .then((res) => res.json())
        .then((json) => setShowMessage(json.id));
    } else {
      setFirstValidationMail(false);
      setFirstValidationName(false);
      setFirstValidationPhone(false);
      console.log("Introduzca bien los datos");
    }
  };

  return (
    <>
      <Container className="my-4">
        <ToastContainer />
        <h2>Resumen de tu compra:</h2>
        <Card className="px-4 font-weight-bold">
          {cart.map((c, i) => (
            <ul className="mt-3 border-5" key={Simbol(i).toString() + i}>
              <h5>{c.title}</h5>
              <div className="row">
                <div className="text-bg-dark col-10">
                  Unidades = {c.cantidad} x ${c.price} Precio total: $
                  {c.price * c.cantidad}
                </div>{" "}
                <span className="col-2 d-flex align-items-center justify-content-evenly">
                  <Button onClick={() => del(c)} className="btn-danger">
                    x
                  </Button>
                </span>
              </div>
            </ul>
          ))}
          <h3>Total de la compra: ${totalPrice()}</h3>
        </Card>
      </Container>
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
    </>
  );
};

export default CheckOut;
