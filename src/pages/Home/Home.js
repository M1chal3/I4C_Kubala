import React, { Fragment, createContext, useState } from "react";
import "./style.css";
import Menu from "../../components/Menu";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

import MainPageImg from "../../assets/images/mainpage1.jpg";
import MainPageSecondImg from "../../assets/images/mainpage2.jpg";

export default function Home() {
  return (
    <>
      <div id="basket"></div>
      <h1 id="homesign">Home</h1>

      <div id="div_main">
        <a href="../eshop">
          <img src={MainPageImg} alt="outdoor shading" id="pic1" />
        </a>
        <h1 className="text_products">Shading technology</h1>
        <p className="text_products_child" id="products">
          We specialize in outdoor and indoor shading technology
        </p>
        <button className="btn1">
          <a href="../form">form</a>
        </button>
        <button className="btn2">
          <a href="../eshop">e-shop</a>
        </button>
        <div id="box1">
          <a href="../products/product"></a>
        </div>
      </div>
      <div>
        <h1 id="AboutUs">About Us</h1>
        <br></br>
        <p id="AboutUs2">
          We are company with a long history and rich experiences over 10 years
          <br /> on the market and we offer these things
        </p>
      </div>
      <div id="div_main2">
        <a href="./eshop">
          <img
            src={MainPageSecondImg}
            alt="outdoor shading product"
            id="pic2"
          />
        </a>
      </div>

      <div id="contact" href="bottom">
        <p id="shadowp">E-mail: kubalmi@student.uzlabina.cz</p>
        <p id="shadowp">Tel. number: 656 789 256</p>
        <p id="shadowp">Address: V Úžlabině 320/23, 100 00 Praha 10</p>

        <b>
          <p>
            <Link to="/Form">
              <a id="shadowp_form">formulář</a>
            </Link>
          </p>
        </b>
      </div>
    </>
  );
}
