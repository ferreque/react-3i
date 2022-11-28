import { Button, Card, Container } from "react-bootstrap";
import { useState } from "react";
import ProductCounter from "./ProductCounter";

const ProductDetail = ({ product, add }) => {
  const [contador, setContador] = useState(1);

  return (
    <Card className="m-2 border-2 h-100">
      <Container className="d-flex justify-content-center align-items-center">
        <Card.Img src={product.image} variant={top} style={{ width: "100px" }} />
      </Container>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-0">
        <Container className="d-flex justify-content-center align-items-center">
          <ProductCounter contador={contador} setContador={setContador} />
          <Button
            variant="success"
            size="sm"
            onClick={() =>
              add({
                id: product.id,
                title: product.title,
                price: product.price,
                cantidad: contador,
              })
            }
          >
            Agregar al carrito
          </Button>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default ProductDetail;
