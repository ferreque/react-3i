import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loader from "./Loader";

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductList data={data} />}</>;
};

export default ProductListContainer;
