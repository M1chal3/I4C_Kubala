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
      .get(`http://localhost:7883/productDetail/${productId}`)
      .then((response) => {
        const Data = response.data;
        // console.log("This is detail data: ", Data);
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
                <p>materiál: {product.fabric}</p>
                <p>{product.dimensions}</p>
              </div>
              <div className="imagePrice">
                <img src={product.image} />

                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
