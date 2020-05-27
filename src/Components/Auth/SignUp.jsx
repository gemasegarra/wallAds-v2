import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Login, FormContainer, Form, InputField, Button, CreateAccount, StyledLink } from '../StyledComponents/Forms';


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  signUp() {
    axios.post('http://34.89.93.186:8080/apiv1/register', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        console.log(res.data);
      }).catch(error => {
        console.log(error.response)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.signUp();
    this.props.history.push('/signin');
  }

  render() {
    return (
      <>
        <Login>Sign up for WallAds</Login>
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
            <Button>Sign up</Button>
          </Form>
        </FormContainer>
        <CreateAccount>Already have an account?</CreateAccount>
        <StyledLink><Link to='/SignIn'> Sign in here</Link>.</StyledLink>
      </>
    )
  }
};

export default SignUp;
