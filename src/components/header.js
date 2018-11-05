import React from "react";
import SearchForm from "./SearchForm";
import "./Header.css";
const Header = () => (
  <div>
    <div className="Headbar">
      <div>
        <a href="/all-products">All Products</a>
      </div>
      <div>
        <h1 href="/">Lambda Services</h1>
      </div>
      <div>
        <SearchForm />
      </div>
      <div>
        <a href="/login">Login</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
      </div>
    </div>
  </div>
);
export default Header;
