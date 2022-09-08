import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products?limit=3")
        .then((res) => res.json())
        .then((json) => setData(json));
    }, 5000);
  });

  return <>{data === [] ? <h2>CARGANDO...</h2> : <ProductList data={data} />}</>; //NO ANDA EL CARGANDO
};

export default ProductListContainer;
