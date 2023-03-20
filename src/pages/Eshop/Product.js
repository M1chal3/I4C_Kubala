import React from "react";
import { Link } from "react-router-dom";

const Product = ({
  ID,
  name,
  description,
  dimensions,
  fabric,
  category,
  price,
  productImg,
}) => {
  return (
    <Link to={`product/${ID}`} className="product">
      {/* <div className="product"> */}
      <img src={productImg} alt={`${name} image`} className="product__image" />
      {/* <div className="product__category">{category}</div> */}
      <h3 className="product__name">{name}</h3>
      {/* <div className="product__description">{description}</div> */}
      {/* <div className="product__dimensions">Rozměry {dimensions}</div> */}
      <div className="product__fabric">Materiál: {fabric}</div>
      <div className="product__price">Cena: {price} Kč</div>
      {/* </div> */}
    </Link>
  );
};

export default Product;
