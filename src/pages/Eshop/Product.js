import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = ({
  Id,
  ID,
  name,
  description,
  dimensions,
  fabric,
  category,
  price,
  image,
}) => {
  return (
    <>
      <Link to={`product/${Id}`} className="product">
        <div className="listProductInfo">
          <h3 className="product__name">{name}</h3>
          <div className="product__fabric">Materiál: {fabric}</div>
          <div className="product__price">Cena: {price} Kč</div>
        </div>
        <img src={image} alt={`${name} image`} className="product__image" />
      </Link>
    </>
  );
};

export default Product;
