import React, { Fragment } from 'react';

const Product = ({item}) => {
	
	return(
		  <Fragment>	
			<div className="img">
				<img src={item.image}
				 alt={item.name}/>
			</div>
			<div className="content">
				<h3>{ item.name } </h3>
				<div className="price">
					{item.price}
				</div>
				<div>
					<button className="btn">Add to cart</button>
				</div>	
			</div>
		 </Fragment>		
			)

};

export default Product;