import React, { Component } from 'react';

// CSS
import './jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className={this.props.styling}>
                <h1>{this.props.title}</h1>
                <br />
                <h4>{this.props.description}</h4>
                <br />
                <h2>{this.props.heading}</h2>
            </div>
        )
    }
}

export default Jumbotron;