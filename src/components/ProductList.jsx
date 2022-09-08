import { CardGroup, Container } from "react-bootstrap";
import Product from "./Product";

const ProductList = ({ data }) => {
  return (
    <Container className="my-3">
      <CardGroup>
        {data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default ProductList;
