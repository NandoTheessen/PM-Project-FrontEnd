import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import "./components/jumbotron.css";
import Jumbotron from "./components/Jumbotron.js";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            height: "75px",
            width: "100%",
            backgroundColor: "white",
            position: "relative"
          }}
        />
        <Header />
        <Jumbotron
          styling="jumbotron railroad"
          description="Designed by experts in the field"
          title="IT Solutions"
        />
        <Jumbotron styling="jumbotron forest" heading="QUALITY IN EVERYTHING WE DO" />
        <Jumbotron
          styling="jumbotron concrete"
          description="Meet our awesome team members:"
          title="OUR TEAM"
        />
      </div>
    );
  }
}

export default App;
