import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';;

const Main = styled.div`
    margin: 20px;
    padding: 20px;
    h2 {
        font-weight: bold;
        color: #4A494A;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
            margin: 5px;
        }
    }
`

class login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value})

    Login = e => {
        e.preventDefault();


    }
}

export default login;