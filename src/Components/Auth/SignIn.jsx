import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../Actions/actions';

import { connect } from 'react-redux';

import { Login, FormContainer, Form, InputField, Button, CreateAccount, StyledLink } from '../StyledComponents/Forms';

function SignIn(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const signIn = () => {
    props.onSignIn(username, password);
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

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (username, password) => {
      signIn(username, password)(dispatch);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
