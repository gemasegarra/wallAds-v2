import * as TYPES from './types';

import axios from 'axios';



export function signInRequest() {
  return {
    type: TYPES.SIGN_IN_REQUEST,
  }
}

export function signInSuccess(username) {
  return {
    type: TYPES.SIGN_IN_SUCCESS,
    username: username,
  }
}

export function signInFailure(error) {
  return {
    type: TYPES.SIGN_IN_FAILURE,
    error: error,
  }
}

export function signIn(username, password) {
  return (dispatch) => {
    dispatch(signInRequest());

    axios.post('http://34.89.93.186:8080/apiv1/login',  {
      username: username,
      password: password
    }, {
      withCredentials: true,
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

const loadAdsRequest = () => ({
  type: TYPES.LOAD_ADS_REQUEST,
});

const loadAdsSuccess = (ads) => ({
  type: TYPES.LOAD_ADS_SUCCESS,
  ads: ads,
});

export function loadAds(dispatch, query = '') {
  dispatch(loadAdsRequest());
  axios.get(`http://34.89.93.186:8080/apiv1/anuncios?${query}`, {
    withCredentials: true,
  }).then(res => {
    dispatch(loadAdsSuccess(res.data.results));
  })
}

export function selectTag(tag, dispatch) {
  dispatch({ type: TYPES.SELECT_TAG, tag: tag });
  loadAds(dispatch, `tag=${tag}`)
}

export function selectAdType(type, dispatch) {
  dispatch({ type: TYPES.SELECT_AD_TYPE, adType: type });
  loadAds(dispatch, `venta=${!(type === 'buy')}`)
}

export function submitSearch(search, dispatch) {
  loadAds(dispatch, `name=${search}`)
}

