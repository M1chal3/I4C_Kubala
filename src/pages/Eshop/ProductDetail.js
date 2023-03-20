import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Function for fetching the product information
const getProductInformation = (productID) => {
  let data = {};
  return data;
};

const ProductDetail = () => {
  const [productInformation, setProductInformation] = useState({});

  // ? React router parameter
  let { id: productID } = useParams();

  useEffect(() => {
    setProductInformation(getProductInformation);
  }, []);

  return <div className="container">ProductDetail ID: {productID}</div>;
};

export default ProductDetail;
