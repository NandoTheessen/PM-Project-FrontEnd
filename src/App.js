import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Jumbotron from './Jumbotron.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{ height: '75px', width: '100%', backgroundColor: 'white', position: 'relative', }}></div>
        <Jumbotron headerText="This is the hero banner." description="I am describing something great here!" />
      </div>
    );
  }
}

export default App;
