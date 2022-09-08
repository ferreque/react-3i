import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="m-1 border-2">
      <Card.Img src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button> Ir al producto</Button>
      </Card.Footer>
    </Card>
  );
};

export default Product;
