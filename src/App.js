import React, { Component } from 'react';

import './components/jumbotron.css';

import Jumbotron from './components/Jumbotron.js';
import Minitron from './components/Minitron.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{ height: '75px', width: '100%', backgroundColor: 'white', position: 'relative', }}></div>
        <Jumbotron styling="jumbotron railroad" description="Designed by experts in the field" title="IT Solutions" />
        <Minitron smallHeader="Services we provide" />
        <Jumbotron styling="jumbotron forest" heading="QUALITY IN EVERYTHING WE DO" />
        <Minitron Header="POPULAR Services" />
        <Jumbotron styling="jumbotron concrete" description="Meet our awesome team members:" title="OUR TEAM" />
      </div>
    );
  }
}

export default App;
