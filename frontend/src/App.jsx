import React, { useState } from 'react';

import './App.css'
import Home from './Pages/Home.jsx';
import Header from './components/Header/header.jsx';
import Shop from './Pages/Shop.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Registration.jsx';
import AdminPanel from './Pages/AdminPanel.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Checkout from './Pages/Checkout.jsx';
import { Routes, Route } from "react-router-dom";


function App() {

    const [active, setActive] = useState("home");

    return (
    <>

    


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path= "/product/:id"  element={<Product/>} />
      </Routes>

    </>

  );





}



export default App
