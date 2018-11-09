import React from "react";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Headbar = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Header = () => (
  <div>
    <Headbar>
      <div>
        <Link to="/all-products">All Products</Link>
      </div>
      <div>
        <h1 href="/">Lambda Services</h1>
      </div>
      <div>
        <SearchForm />
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
    </Headbar>
  </div>
);
export default Header;
