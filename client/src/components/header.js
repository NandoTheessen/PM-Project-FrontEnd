import React from 'react';
//import SearchBar from './searchbar.js'
//import Login from './login.js'
//import Cart from '/cart.js'

const Navbar = () => {
	return (
		<div className='left'>
			<h5>All Products</h5>
		</div>
		<div className='center'>
			<h3>Lambda Services</h3)
		</div>
		<div className='right'>
			<SearchBar />
			<Login />
			<h5>|</h5>
			<Cart />
		</div>
	)
}

export default Navbar;
