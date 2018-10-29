import React, { Component } from 'react';

// Components
import Button from './button.js';

// CSS
import './jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <Button className="jumbotron__button" buttonText="This is the buttonText" />
            </div>
        )
    }
}

export default Jumbotron;