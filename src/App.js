
import React from "react";
import Productpages from"./pages/Productpage";
import SingleproductPage from "./pages/SingleProductPage";
import './App.css';
import SingleProductPage from "./pages/SingleProductPage";
import LogPage from "./pages/LogPage";
import SignUp from "./pages/SignUp";
import Cart from "./pages/CartPage";
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";



function App() {
  return (
    <Router>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/login" element={<LogPage/>}/>
<Route path="/signup" element={<SignUp/>}/>
</Routes>
</Router>
   
  );
}

export default App;
