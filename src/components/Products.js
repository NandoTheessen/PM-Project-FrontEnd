import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Products extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios
      .get(`https://shrouded-atoll-78771.herokuapp.com/api/products/`)
      .then(res => {
        
        this.setState({
          products: res.data
        });
      })
      .catch(err => console.log(err));
  };


  render() {
    console.log(this.props)
    return (
      <Container>
        <h1>All Products</h1>
        {this.state.products.map(item => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p><b>${item.price}</b></p>
              <button onClick={() => this.props.cart(item)}>Add to cart</button>
            </div>
          )
        })}
      </Container>
    )
  }
    
}

const Container = styled("div")`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 25px 5%;
  font-family: Georgia, "Times New Roman", Times, serif;
  
  h1 {
    width: 100%;
  }
  div {
    margin: 25px;
    padding: 7px;
    border: 1px solid black;
    text-align: left;
    width: 40%;
  }
  button{
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    bottom: 0;
  }
  button:hover {
    background-color: lightgray;
  }
  button:active{
    background-color: darkgray;
  }
  button:focus{
    outline: 0;
  }  
`



export default Products;