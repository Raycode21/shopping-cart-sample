import React, { Fragment } from 'react';
import  Product  from './Product';

const Products =(props) => {
  const {bakedProducts} = props;
  return (
    <Fragment>

    <section className="products" id="products">
        <h1 className="heading">Our
          <span>
            Menu
          </span>  
        </h1>
        <div className="box-container">
            {bakedProducts?.map((bakedProduct) =>(
              <div className="box">
                 <div key={bakedProduct.id}>{bakedProduct.name}</div>

            
            
          </div> 
              
              ))}
          
        </div>
    </section>
    </Fragment>    
  );
}


export default Products;
