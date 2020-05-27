import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Login, FormContainer, Form, InputField, Button, CreateAccount, StyledLink } from '../StyledComponents/Forms';


function SignUp(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  }

  const signUp = () => {
    axios.post('http://34.89.93.186:8080/apiv1/register', {
      username: username,
      password: password
    })
      .then(res => {
        console.log(res.data);
      }).catch(error => {
        console.log(error.response)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
    props.history.push('/signin');
  }

    return (
      <>
        <Login>Sign up for WallAds</Login>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <InputField>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' onChange={handleChange(setUsername)}></input>
            </InputField>
            <InputField>
              <label htmlFor='password'>Password: </label>
              <input type='password' id='password' onChange={handleChange(setPassword)}></input>
            </InputField>
            <Button>Sign up</Button>
          </Form>
        </FormContainer>
        <CreateAccount>Already have an account?</CreateAccount>
        <StyledLink><Link to='/SignIn'> Sign in here</Link>.</StyledLink>
      </>
    )
  };

export default SignUp;
