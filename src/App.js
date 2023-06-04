import React, { Component } from 'react';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from "react-toastify";

import JSON from './db.json';


import Header from './components/Header';
import Products from './components/Products';


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
      <Products bakedProducts ={this.state.bakedProducts}/>
    </Router>
    </div>
  );
}

}


export default App;
