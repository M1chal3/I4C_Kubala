import React, { useEffect, useState } from "react";
import Product from "./Product";
import FetchData from "./fetchdata";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getAxios = () => {
    axios
      .get("data.php")
      .then((response) => {
        const Data = response.data;
        setProducts(Data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => getAxios(), []);

  return (
    <div className="product-list">
      <div className="container_eshop">
        {products.map((product) => (
          <Product
            Id={product.Id}
            name={product.name}
            description={product.description}
            dimensions={product.dimensions}
            fabric={product.fabric}
            category={product.category}
            price={product.price}
            image={product.image}
            key={product.Id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
