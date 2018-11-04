import React, { Component } from 'react';

import "./Minitron.css";

class Minitron extends Component {
    render() {
        return (
            <div className={this.props.layout} >
                <h1>{this.props.header}</h1>
                <h3>{this.props.smallHeader}</h3>
                <hr />
                <ul>
                    {this.props.listItems}
                </ul>
            </div>
        )
    }
}



export default Minitron;