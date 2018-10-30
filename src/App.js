import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './components/jumbotron.css';
import Jumbotron from './components/Jumbotron.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{ height: '75px', width: '100%', backgroundColor: 'white', position: 'relative', }}></div>
        <Jumbotron styling="railroad" />
        <Jumbotron styling="forest" />
        <Jumbotron styling="concrete" />
      </div>
    );
  }
}

export default App;
