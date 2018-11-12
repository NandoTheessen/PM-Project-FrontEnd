import React from "react";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = props => {
  const Headbar = styled("nav")`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `;
  const Heading = styled("h1")``;
  return (
    <Headbar>
      <Link to="/all-products">All Products</Link>
      <Link to="/">
        <Heading>Lambda Services</Heading>
      </Link>
      <SearchForm />
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart</Link>
    </Headbar>
  );
};
export default Header;
