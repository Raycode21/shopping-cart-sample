import React, { Component } from 'react';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

import { ToastContainer } from "react-toastify";

import JSON from './db.json';


import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component  {

  state = {
    bakedProducts:JSON 
  }

  render(){
  return (
    <div className="App">
    <Router>
      <ToastContainer/>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/" exact element={<Products/>}/>
      </Routes>
    </Router>
    </div>
  );
}

}


export default App;
