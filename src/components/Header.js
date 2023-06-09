import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import { logoutUser } from "../features/authSlice";


const Header = () => {
	const { cartTotalQuantity } = useSelector((state) => state.cart);
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	console.log(auth);


  return (
  	<Fragment>
 
    <div className="header">

		<Link to="/">
		<a htmlFor="/" className="logo"> 
		<i className="fa-solid fa-cake-candles"></i>Maries bakery
		</a>
		</Link>

		<nav className="navbar">
			<a htmlFor="/Home">Home</a>
			<a htmlFor="/index.html#about">About</a>
			<a htmlFor="/blogs">Blogs</a>
			<a htmlFor="/index.html#contact">Contact</a>
			<a htmlFor="./products">Menu</a>
		</nav>

		<div className="icons">
			<div id="menu-btn" className="fas fa-bars"></div>
			<div id="search-btn" className="fas fa-search"></div>
			<Link to="/Cart">
			<div id="cart-btn" className="fas fa-shopping-cart">
				<span className="bag-quantity">{cartTotalQuantity}</span>
			</div>
			</Link>

			<Link to="/Login"><div id="login-btn" className="fas fa-user"></div></Link>



		</div>

		<form action="" className="search-form">
			<input type="search" id="search-box" placeholder="search here"/>
			<label for="search-box" className="fas fa-search"></label>
		</form>
</div>


      {auth._id ? (
        <Links>
          {auth.isAdmin ? (
            <div>
              <Link to="/admin/summary">Admin</Link>
            </div>
          ) : null}
          <div
            onClick={() => {
              dispatch(logoutUser(null));
              toast.warning("Logged out!", { position: "bottom-left" });
            }}
          >
            Logout
          </div>
        </Links>
      ) : (
        <AuthLinks>
          <Link to="/login">Login</Link>
          <Link to="register">Register</Link>
        </AuthLinks>
      )}

      </Fragment>

  );
}

export default Header;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
`;