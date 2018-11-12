import React, { Component } from "react";

import Jumbotron from "./components/Jumbotron.js";
import Minitron from "./components/Minitron.js";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled("div")`
  text-align: center;
  margin: 0 auto;
  max-width: 1680px;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header />
        <div
          style={{ height: "75px", width: "100%", backgroundColor: "white", position: "relative" }}
        />
        <Jumbotron
          styling="railroad"
          description="Designed by experts in the field"
          title="IT Solutions"
          button="GET SOLUTION"
        />
        <Minitron smallHeader="Services we provide" listItems={listItems} layout="minitron" />
        <Jumbotron
          styling="forest"
          heading="QUALITY IN EVERYTHING WE DO"
          button="SHOP IT SOLUTIONS"
        />
        <Minitron header="POPULAR Services" layout="minitron" />
        <Jumbotron
          styling="concrete"
          description="Meet our awesome team members:"
          title="OUR TEAM"
          button="READ MORE"
        />
      </Container>
    );
  }
}

const elements = ["UI/UX", "DATABASE DESIGN", "MOBILE APPS", "BLOGS"];
const listItems = elements.map(element => <li key={element}>{element}</li>);

export default App;
