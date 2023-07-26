import React, { useEffect, useState } from "react";
import Product from "./Product";
import FetchData from "./fetchdata";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getAxios = () => {
    axios
      .get("http://localhost:7883/fetch")
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
        {/* <h2>Total products:{this.state.Data}</h2>
        <input onChange={this.filtrData}>žaluzie</input> */}
        {products.map((product) => (
          <Product
            Id={product.Id}
            name={product.name}
            description={product.description}
            dimensions={product.dimensions}
            fabric={product.fabric}
            category={product.category}
            price={product.price}
            productImg={product.productImg}
            key={product.Id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
