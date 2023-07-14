import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <Routes>
      <Route exact path='/' element = {<Home/>}/>
      <Route exact path='/register' element = {<Register/>}/>
      <Route exact path='/login' element = {<Login/>}/>
    </Routes>
  );
}

export default App;
