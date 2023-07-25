import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AddProduct from "./Components/addProduct";
import AllProducts from "./Components/AllProducts";

function App() {
  return (
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/register' element = {<Register/>}/>
      <Route exact path='/login' element = {<Login/>}/>
      <Route exact path='/addProduct' element = {<AddProduct/>}/>
      <Route exact path='/allProduct' element = {<AllProducts/>}/>
    </Routes>
  );
}

export default App;
