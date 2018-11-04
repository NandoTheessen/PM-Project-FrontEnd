import React from "react";

import styled from 'styled-components';
const Sausage = styled.button`
    display: inline-block;
    margin-top: 24px;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid;
    color: #192945;
    background-color: #fff;
    border-color: #ddd;
    padding: 15px;
    font-size: 20px;
    line-height: 1.33;
    box-sizing: border-box;
    text-decoration: none;
    max-width: 10%;
`;


const Button = ({className, buttonText}) => (
    <Sausage className={`${className}`} type="button" >
        {buttonText}
    </Sausage>
)

export default Button;
