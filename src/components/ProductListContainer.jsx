import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loader from "./Loader";

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products/all")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductList data={data} />}</>;
};

export default ProductListContainer;
