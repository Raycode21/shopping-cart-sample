import React, { Component } from 'react';

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
      <Header />
      <Products bakedProducts ={this.state.bakedProducts}/>
    </div>
  );
}

}


export default App;
