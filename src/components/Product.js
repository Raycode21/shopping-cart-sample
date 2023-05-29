import React, { Fragment } from 'react';

const Product = (props) => {
	const { bakedProduct } = props;

	return
		(
		  <Fragment>	
			<div className="img">
				<img src={bakedProduct.image}
				 alt={bakedProduct.name}/>
			</div>
			<div className="content">
				<h3>{ bakedProduct.name } </h3>
				<div className="price">
					{bakedProduct.price}
				</div>
				<div>
					<button className="btn">Add to cart</button>
				</div>	
			</div>
		 </Fragment>		
			)

};

export default Product;