import React from 'react';
import './button.css'

const Button = ({className, buttonText}) => (
    <button className={`${className}`}>
        {buttonText}
    </button>
)

export default Button;