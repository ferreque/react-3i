import { Button, Card, Container } from "react-bootstrap";

const ProductDetail = ({ product }) => {
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
          <Button variant="success" size="sm">
            Comprar
          </Button>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default ProductDetail;
