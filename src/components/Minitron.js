import React, { Component } from 'react';

import "./Minitron.css";

class Minitron extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.smallHeader}</h3>
                <hr />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

const elements = ["UI/UX", "DATABASE DESIGN", "MOBILE APPS", "BLOGS"];
const listItems = elements.map((element) => 
    <li>{element}</li>
)

export default Minitron;