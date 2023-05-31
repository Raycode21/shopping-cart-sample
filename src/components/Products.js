import React, { Fragment } from 'react';
import  Product  from './Product';

const Products =(props) => {
  const items = props.bakedProducts.map((item) => {

    return (
      <Product key={item.id} item={item}/>
      )
  });

  return(
  <Fragment>
  <div className="space">
  </div>

    <section className="products" id="products">
        <h1 className="heading">Our
          <span>
            Menu
          </span>  
        </h1>
    
        <div>
              
                 { items }
                     
            
            
          </div>   
        
      </section>
    </Fragment>  
    


    )
  
}


export default Products;
