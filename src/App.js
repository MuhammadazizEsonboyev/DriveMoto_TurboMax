import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppThree from "./About/AppThree";
import AppTwo from "./Category/AppTwo";
import AppOne from "./Home/AppOne";
import FooterPage from "./Home/Footer/Footer";
import MainNav from "./Home/MainNav";
import Cart from "./Home/Section/Cards/Cart";
import "./index.css";

function App() {

  const [cart, setCart] = useState([])

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return alert("Cart is added");
    setCart([...cart, item])
    // console.log(cart);
    // console.log(item);
  }
  const handleChange = (item, d) => {
    const indx = cart.indexOf(item)
    console.log(indx);
    const arr = cart;
    arr[indx].amount += d
    console.log(arr[indx]);
    if (arr[indx].amount === 0) arr[indx].amount = 1;
    setCart([...arr])
  }

  return (
    <>

      <Router>
        <MainNav size={cart.length} />
        <Routes>
          <Route path="/home" element={<AppOne handleChange={handleChange} handleClick={handleClick} cart={cart} setCart={setCart} />} />
          <Route path="/category" element={<AppTwo />} />
          <Route path="/about" element={<AppThree />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />

        </Routes>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
