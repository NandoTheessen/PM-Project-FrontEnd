import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Jumbotron from './components/Jumbotron.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Jumbotron headerText="This is the hero banner." description="I am describing something great here!" />
        <Jumbotron headerText="This is placed after a service banner divider." description="So is this piece here, have fun!" />
      </div>
    );
  }
}

export default App;
