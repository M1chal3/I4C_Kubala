import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

// Function for fetching the product information
// const getProductInformation = (productId) => {
//   let data = {};
//   return data;
// };

// const ProductDetail = () => {
//   const [productInformation, setProductInformation] = useState({});

// ? React router parameter

// let { id: productID } = useParams();

// useEffect(() => {
//   setProductInformation(getProductInformation);
// }, []);

const ProductDetail = ({
  Id,
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
    <>
      <div className="container">
        ProductDetail ID: <h3>{name}</h3>
      </div>
      <h3 key={ID}>{Id}</h3>
    </>
  );
};

export default ProductDetail;
