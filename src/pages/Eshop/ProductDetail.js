import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import axios from "axios";
import MainPageImg from "../../assets/images/mainpage1.jpg";

const ProductDetail = () => {
  const [productsDetail, setProductsDetail] = useState([]);

  const { productId } = useParams();

  const getProductDetail = () => {
    axios
      .get(`/detail.php?id=${productId}`)
      .then((response) => {
        const Data = response.data;
        setProductsDetail(Data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
      <div>
        <h3>Product ID: {productId}</h3>
        <div className="detailInfo">
          {productsDetail.map((product) => (
            <div>
              <h2>{product.name}</h2>
              <div className="basicInformation">
                <p className="description">{product.description}</p>
                <br />
                <p>meterial: {product.fabric}</p>
                <p>
                  dimension: {product.dimensions} x {product.dimensions} m²
                </p>
                <p className="imagePrice">
                  Price: <b>{product.price}</b>
                </p>
              </div>

              <div className="imagePart">
                <img src={product.image} alt="img" className="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
