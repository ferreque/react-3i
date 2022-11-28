import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ProductDetail from "./ProductDetail";
import NothingHere from "./NothingHere";

const ProductDetailContainer = ({ add }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setIsLoading(false));
  }, []);

  if (!product.id) {
    return <NothingHere />;
  }
  return <>{isLoading ? <Loader /> : <ProductDetail product={product} add={add} />}</>;
};

export default ProductDetailContainer;
