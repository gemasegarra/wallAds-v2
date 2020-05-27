import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Login, FormContainer, Form, InputField, Button, CreateAccount, StyledLink } from '../StyledComponents/Forms';

function SignIn(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const signIn = () => {
    axios.post('http://34.89.93.186:8080/apiv1/login', {
      username: username,
      password: password
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

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
    props.history.push('/adlist');
  }
    return (
      <>
        <Login>Sign in to WallAds</Login>
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
            <Button>Sign in</Button>
          </Form>
        </FormContainer>
        <CreateAccount>New to WallAds?</CreateAccount>
        <StyledLink><Link to='/SignUp'> Register here</Link>.</StyledLink>
      </>
    )
};

export default SignIn;
