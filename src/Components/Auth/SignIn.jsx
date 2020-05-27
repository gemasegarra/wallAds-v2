import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Login, FormContainer, Form, InputField, Button, CreateAccount, StyledLink } from '../StyledComponents/Forms';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  signIn() {
    axios.post('http://34.89.93.186:8080/apiv1/login', {
      username: this.state.username,
      password: this.state.password
    }, {
      withCredentials: true,
    })
      .then(res => {
        console.log(res.headers);
        console.log(res.data);
      }).catch(error => {
        console.log(error.response)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.signIn();
    this.props.history.push('/adlist');
  }

  render() {
    return (
      <>
        <Login>Sign in to WallAds</Login>
        <FormContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputField>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' onChange={this.handleChange}></input>
            </InputField>
            <InputField>
              <label htmlFor='password'>Password: </label>
              <input type='password' id='password' onChange={this.handleChange}></input>
            </InputField>
            <Button>Sign in</Button>
          </Form>
        </FormContainer>
        <CreateAccount>New to WallAds?</CreateAccount>
        <StyledLink><Link to='/SignUp'> Register here</Link>.</StyledLink>
      </>
    )
  }
};

export default SignIn;
