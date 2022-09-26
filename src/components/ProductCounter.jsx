import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const ProductCounter = ({ contador, setContador }) => {
  const suma = () => {
    setContador(contador + 1);
  };
  const resta = () => {
    contador > 0 && setContador(contador - 1);
  };

  return (
    <div>
      <Container className="d-flex">
        <Button onClick={() => resta()} size="sm">
          -
        </Button>
        <div className="mx-2">{contador}</div>
        <Button onClick={() => suma()} size="sm">
          +
        </Button>
      </Container>
    </div>
  );
};

export default ProductCounter;
