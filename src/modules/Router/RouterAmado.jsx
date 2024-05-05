import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../layoutt/home/Home";
import Shop from "../layoutt/Shop/Shop";
import Product from "../layoutt/Product/Product";
import Cart from "../layoutt/Cart/Cart";
import Checkout from "../layoutt/Checkout/Checkout";
import LayoutAmado from "../layoutt/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css";

const RouterAmado = () => {
  return (
    <ChakraProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutAmado />}>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path='/about' element = {<About/>}/>
        <Route path='/portfolio' element = {<Portfolio/>}/> */}
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default RouterAmado;
