import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>{this.props.headerText}</h1>
                <h4>{this.props.description}</h4>
            </div>
        )
    }
}

export default Jumbotron;