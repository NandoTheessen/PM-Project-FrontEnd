import React, { Component } from "react";
import axios from "axios";
import List from "./List";

class Admin extends Component {
  state = {
    orders: [],
    products: []
  };

  componentDidMount() {
    this.fetchData("products");
    this.fetchData("orders");
  }

  addProduct = product => {
    axios
      .post("whatever address", product)
      .then(response => this.fetchData("products"))
      .catch(err => console.log(err));
  };

  fetchData = name => {
    axios
      .get(`https://urlthatisawesome.com/api/${name}`)
      .then(res => {
        this.setState({
          [`${name}`]: res.data[name]
        });
      })
      .catch(err => console.log(err));
  };

  modifyElement = (element, id, name) => {
    axios
      .put(`https://urlthatisawesome.com/api/${name}/:${id}`, element)
      .then(response => {
        this.fetchData(name);
      })
      .catch(err => console.log(err));
  };

  deleteElement = (id, name) => {
    axios
      .delete(`https://urlthatisawesome.com/api/${name}/:${id}`)
      .then(response => {
        this.fetchData(name);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <List
          name="product"
          list={this.state.products}
          delElement={this.deleteElement}
          addElement={this.addProduct}
          modifyElement={this.modifyElement}
        />
        <List
          name="order"
          list={this.state.orders}
          delElement={this.deleteElement}
          modifyElement={this.modifyElement}
        />
      </div>
    );
  }
}

export default Admin;
