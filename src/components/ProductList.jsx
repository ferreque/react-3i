import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const ProductList = ({ data }) => {
  return (
    <Container>
      <Row md={3} xs={1}>
        {data.map((product) => (
          <Col className="my-1" key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
