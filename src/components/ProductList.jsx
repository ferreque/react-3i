import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

const ProductList = ({ data }) => {
  return (
    <Container className="mb-3">
      <Row md={3} xs={1}>
        {data.allProducts.map((product, i) => (
          <Col className="my-1" key={Symbol(i).toString + i}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
