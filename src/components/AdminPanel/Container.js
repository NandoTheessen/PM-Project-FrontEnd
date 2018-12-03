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

  addProduct = async product => {
    await axios.post("https://shrouded-atoll-78771.herokuapp.com/api/products"
    , product).catch(err => console.log(err));
    this.fetchData("products");
  };

  fetchData = async name => {
    const response = await axios.get(`https://shrouded-atoll-78771.herokuapp.com/api/${name}`)
      .catch(err => console.log(err));
    this.setState({
      [`${name}`]: response.data[name]
    });
  };

  modifyElement = async (element, id, name) => {
    await axios.put(`https://shrouded-atoll-78771.herokuapp.com/api/${name}/:${id}`, element)
      .catch(err => console.log(err));
    this.fetchData(name);
  };

  deleteElement = async (id, name) => {
    await axios.delete(`https://shrouded-atoll-78771.herokuapp.com/api/${name}/:${id}`)
      .catch(err => console.log(err));
    this.fetchData(name);
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
