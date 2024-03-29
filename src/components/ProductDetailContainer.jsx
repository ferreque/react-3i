import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ProductDetail from "./ProductDetail";
import NothingHere from "./NothingHere";

const ProductDetailContainer = ({ add, auth }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://node-3i.vercel.app/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  if (!params.id) {
    return <NothingHere />;
  }
  return (
    <>
      {isLoading ? <Loader /> : <ProductDetail product={product} add={add} auth={auth} />}
    </>
  );
};

export default ProductDetailContainer;
