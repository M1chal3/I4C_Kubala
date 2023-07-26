import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
// React router
import { Routes, Route, Navigate } from "react-router-dom";

// Components
// import Calendar from "./Calendar/Calendar";
import Profile from "./Profile/Profile";
import Forms from "./Form/Forms";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu";
import Calendar from "./pages/Calendar/Calendar";

// Eshop
import ProductList from "./pages/Eshop/ProductList";
import ProductDetail from "./pages/Eshop/ProductDetail";
import FetchData from "./pages/Eshop/fetchdata";

import ContactUs from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import "./pages/Home/style.css";
import ReactSwitch from "react-switch";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const ThemeContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Menu />

          <ReactSwitch
            className="switch"
            onChange={toggleTheme}
            checked={theme === "light"}
            defaultValue={false}
            checkedIcon={<BsSun id="sun" />}
            uncheckedIcon={<BsMoon id="moon" />}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/eshop" element={<ProductList />} />
            <Route
              path="/eshop/product/:productId"
              element={<ProductDetail />}
            />
            <Route path="/eshop/fetchdata" element={<FetchData />} />

            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/form" element={<Forms />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
