import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="m-2 border-2 h-100">
      <Container className="d-flex justify-content-center align-items-center">
        <Card.Img src={product.image} variant={top} style={{ width: "100px" }} />
      </Container>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className="d-flex justify-content-center align-items-center">
          <Link to={`/products/${product._id}`}>
            <Button size="sm"> Ir al producto</Button>
          </Link>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default Product;
