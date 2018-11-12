import React, { Component } from "react";
import img from "./images/ico/Search.svg";
import styled from "styled-components";

const SearchButton = styled.button`
  height: 20px;
  width: 50px;
`;
const SearchFormElement = styled.form`
  display: flex;
  align-items: center;
`;
class SearchForm extends Component {
  state = {
    search: ""
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(`Cannot find: ${this.state.search}`);
    this.setState({
      search: ""
    });
  };

  render() {
    return (
      <SearchFormElement onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search Our Shop..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <SearchButton type="button" onClick={this.handleSubmit}>
          <img src={img} alt="search symbol" />
        </SearchButton>
      </SearchFormElement>
    );
  }
}

export default SearchForm;
