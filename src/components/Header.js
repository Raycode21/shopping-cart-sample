import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
  	<Fragment>
 
    <div className="header">

       
		<a htmlFor="/" className="logo"> <i className="fa-solid fa-cake-candles"></i>Maries bakery</a>

		<nav className="navbar">
			<a htmlFor="/index.html">Home</a>
			<a htmlFor="/index.html#about">About</a>
			<a htmlFor="/blogs">Blogs</a>
			<a htmlFor="/index.html#contact">Contact</a>
			<a htmlFor="/index.html#products">Menu</a>
		</nav>

		<div className="icons">
			<div id="menu-btn" className="fas fa-bars"></div>
			<div id="search-btn" className="fas fa-search"></div>
			<div id="cart-btn" className="fas fa-shopping-cart">
				<span >0</span>
			</div>

			<div id="login-btn" className="fas fa-user"></div>



		</div>

		<form action="" className="search-form">
			<input type="search" id="search-box" placeholder="search here"/>
			<label for="search-box" className="fas fa-search"></label>
		</form>
		
		<div className="shopping-cart" id="shopping-cart">
			<div className="box">





				</div>
			</div>	





		<form action="" className="login-form">
			<h3>login here</h3>
			<input type="email" placeholder="enter email" className="box"/>
			<input type="password" placeholder="enter password" className="box"/>
			<p>forgot password?<a htmlFor="#">click here</a></p>

			<input type="submit" value="log in now" className="btn"/>
			<p>Don't have an account?<a htmlFor="/registration.html">sign up here</a></p>




		</form>

	




</div>
</Fragment>
  );
}

export default Header;