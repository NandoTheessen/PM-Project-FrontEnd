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
    </Headbar>
  </div>
);
export default Header;
