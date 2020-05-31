import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../Store/actions';

import { connect } from 'react-redux';

import { ReusableForm, Input } from './ReusableForm';

import { Login, FormContainer, InputField, Button, CreateAccount, StyledLink } from '../StyledComponents/Forms';

function SignIn(props) {



  const handleSubmit = ({ username, password }) => {
    props.onSignIn(username, password);
    props.history.push('/adlist');
  }
  return (
    <>
      <Login>Sign in to WallAds</Login>
      <FormContainer>
        <ReusableForm onSubmit={handleSubmit} initialValues={{ username: "", password: "" }}>
          <InputField>
            <label htmlFor='username'>Username:</label>
            <Input type="text" name="username" /></InputField>
          <InputField>
            <label htmlFor='password  '>Password:</label>
            <Input type="password" name="password" />
          </InputField>

          <Button>Sign in</Button>
        </ReusableForm>
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
