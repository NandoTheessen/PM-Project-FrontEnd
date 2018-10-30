import React from 'react';

const Button = ({className, buttonText}) => (
    <button className={`${className}`}>
        {buttonText}
    </button>
)

export default Button;