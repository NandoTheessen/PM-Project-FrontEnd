import React, { Component } from "react";

import "./components/jumbotron.css";

import Jumbotron from "./components/Jumbotron.js";
import Minitron from "./components/Minitron.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{ height: "75px", width: "100%", backgroundColor: "white", position: "relative" }}
        />
        <Jumbotron
          styling="jumbotron railroad"
          description="Designed by experts in the field"
          title="IT Solutions"
          button="GET SOLUTION"
        />
        <Minitron smallHeader="Services we provide" listItems={listItems} layout="minitron" />
        <Jumbotron
          styling="jumbotron forest"
          heading="QUALITY IN EVERYTHING WE DO"
          button="SHOP IT SOLUTIONS"
        />
        <Minitron header="POPULAR Services" layout="minitron" />
        <Jumbotron
          styling="jumbotron concrete"
          description="Meet our awesome team members:"
          title="OUR TEAM"
          button="READ MORE"
        />
      </div>
    );
  }
}

const elements = ["UI/UX", "DATABASE DESIGN", "MOBILE APPS", "BLOGS"];
const listItems = elements.map(element => <li key={element}>{element}</li>);

export default App;
