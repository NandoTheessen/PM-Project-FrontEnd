import React, { Component } from "react";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 28px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #222222;
  align-items: center;
  padding-top: 28px;
`;

const SmallHeader = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 28px;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #222222;
  align-items: center;
  padding: 15px 0;
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  text-align: center;
  padding: 15px 20px;
`;

const ListItem = styled.li`
  padding: 0;
`;

class Minitron extends Component {
  render() {
    return (
      <div className={this.props.layout}>
        <Header>{this.props.header}</Header>
        <SmallHeader>{this.props.smallHeader}</SmallHeader>
        <UnorderedList>{this.props.listItems}</UnorderedList>
      </div>
    );
  }
}

export default Minitron;
