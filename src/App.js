import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import data from './bakedProducts';


function App() {
  const {bakedProducts} = data;
  return (
    <div className="App">
      <Header />
      <Products bakedProducts ={bakedProducts}/>
    </div>
  );
}


export default App;
