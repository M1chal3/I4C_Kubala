import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style_menu.css";
import { FaShoppingBasket } from "react-icons/fa";
const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <ul>
          <li className="menu__item">
            <Link className="a" to="/home">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link className="a" to="/eshop">
              <p> E-shop</p>
            </Link>
          </li>
          <li className="menu__item">
            <Link className="a" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="menu__item">
            <Link className="a" to="/profile">
              Profile
            </Link>
          </li>
          <li className="menu__item_basket">
            <Link className="shop" to="/eshop">
              <FaShoppingBasket />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
