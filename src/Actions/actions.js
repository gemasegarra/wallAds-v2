
import axios from 'axios';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export function signInRequest() {
  return {
    type: SIGN_IN_REQUEST,
  }
}

export function signInSuccess(username) {
  return {
    type: SIGN_IN_SUCCESS,
    username: username,
  }
}

export function signInFailure(error) {
  return {
    type: SIGN_IN_FAILURE,
    error: error,
  }
}

export function signIn(username, password) {
  return (dispatch) => {
    dispatch(signInRequest());

    axios.post('http://34.89.93.186:8080/apiv1/login', {
      username: username,
      password: password
    }).then(({ data }) => {
      let { success, error } = data;
      if (!success) {
        dispatch(signInFailure(error));
      } else {
        localStorage['username'] = username;
        dispatch(signInSuccess(username));
      }
    }).catch(error => {
      dispatch(signInFailure(error.toString()));
    });
  };
}


