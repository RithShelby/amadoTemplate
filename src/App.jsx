import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/index1.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutApp from "./module/layout/Layout";
import Home from "./module/app/home/Home";
import Shop from "./module/app/Shop/Shop";
import Product from "./module/app/Product/Product";
import Cart from "./module/app/Cart/Cart";
import Checkout from "./module/app/Checkout/Checkout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
