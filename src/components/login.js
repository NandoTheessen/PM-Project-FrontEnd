import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Login = styled.div`
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
`;

class login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value})
    Login = e => {
        e.preventDefault();

        axios.post('http://localhost:3000/login', this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            const reqOptions = {
                headers: {
                    Authorization: res.data.token,
                }
            }
            axios.get('http://localhost:3000/cart', reqOptions)
            .then(res => {
                this.props.isLoggedIn(true);
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error);
        })
        this.setState({username: '', password: ''})
    }
    render() {
        return (
            <Login>
                <h2>Login</h2>
                <form onSubmit={this.Login}>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Login>
        );
    }
}

export default login; 