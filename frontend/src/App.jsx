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


function App() {

    const [active, setActive] = useState("home");
    const [ProductID, setProductID] = useState(0);


    if(active === "signIN") {

      return (
        <>
        <Login setActive={setActive} />
        </>
      );

    }

    else if(active === "signUP") {

      return (
        <>
        <Register setActive={setActive} />
        </>
      );

    }

    else {

    return (
    <>

    <Header setActive={setActive} />

    {active === "home" && <Home />}
    {active === "shop" && <Shop setActive={setActive} setProductID={setProductID} />}
    {active === "contact" }
    {active === "about" }
    {active === "admin" && <AdminPanel />}
    {active === "product" && <Product ProductID={ProductID} />}
    {active === "cart" && <Cart setActive={setActive} />}
    {active === "Checkout" && <Checkout />}
    </>

  );


    }


}



export default App
