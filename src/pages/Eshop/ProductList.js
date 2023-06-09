import React from "react";
import Product from "./Product";
import FetchData from "./fetchdata";

const ProductList = (props) => {
  return (
    <div className="product-list">
      <div className="container">
        {props.products.map((product) => (
          <Product
            ID={product.ID}
            name={product.name}
            description={product.description}
            dimensions={product.dimensions}
            fabric={product.fabric}
            category={product.category}
            price={product.price}
            productImg={product.productImg}
            key={product.ID}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
