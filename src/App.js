import React from "react";

// React router
import { Routes, Route, Navigate } from "react-router-dom";

// Components
// import Calendar from "./Calendar/Calendar";
import Profile from "./Profile/Profile";
import Forms from "./Form/Forms";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu";

// Eshop
import ProductList from "./pages/Eshop/ProductList";
import ProductDetail from "./pages/Eshop/ProductDetail";

import ContactUs from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";

const DUMMY = [
  {
    ID: 1,
    name: "Venkovní žaluzie",
    description: "Venkovní zastínění před sluníčkem",
    dimensions: 15,
    price: 5000,
    category: "venkovní",
    fabric: "hliník",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    ID: 2,
    name: "Žaluzie",
    price: 500,
    dimensions: 2,
    description: "venkovní stínící technika",
    category: "venkovní",
    fabric: "hliník",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    ID: 3,
    name: "Rolety",
    price: 3000,
    dimensions: 1,
    description:
      "venkovní stínící technika, konkrétně VENKOVNÍ SCREENOVÉ ROLETY jsou Nejvíce žádané provedení venkovních screenových rolet",
    category: "venkovní",
    fabric: "látka",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    ID: 4,
    name: "Pergola",
    price: 50000,
    dimensions: 2,
    description:
      "hliníková pergola se nejčastěji používá jako venkovní zastínění velkých ploch u domu či na zahradě",
    category: "venkovní",
    fabric: "hliník",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    ID: 5,
    name: "Látková roleta",
    price: 300,
    dimensions: 1,
    description:
      "Jedním z nejvíce používaných zastínění v domácnosti bývá právě řetízková roleta, kterou si zákazník může vybrat podle držáků s plastovým či kovovým úchytem ",
    category: "vnitřní",
    fabric: "látka",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    ID: 6,
    name: "Záclonové pojezdy",
    price: 500,
    dimensions: 1,
    description:
      "záclonové pojezdy, neboli jedna z variant vnitřního zastínění, které mohou mít několik variant, první je klasická bez motoru a další je s motorem na dálkové ovládání s použitím chytré domácnosti, které se používají na zavěšení záclony a následného zastínění vnitřních prostor",
    category: "vnitřní",
    fabric: "hliník",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
  {
    ID: 7,
    name: "Baldachýn",
    price: 1500,
    dimensions: 1,
    description:
      "Baldachýn je dalším pojmem ve stínící technice, který se používá pro vnitřní zastínění a existuje tzv. CSP Baldachýn, který je také v této kategorii nejrozšířenější",
    category: "vnitřní",
    fabric: "látka",
    productImg:
      "https://images.unsplash.com/photo-1675408050516-4867a942635a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  },
];

const App = () => {
  return (
    <>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/eshop"
            element={<ProductList products={DUMMY} />}
          ></Route>
          <Route path="/eshop/product/:id" element={<ProductDetail />} />

          {/* <Route path="/calendar" element={<Calendar />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/form" element={<Forms />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
