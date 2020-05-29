
import axios from 'axios';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const LOAD_ADS_REQUEST = 'LOAD_ADS_REQUEST';
export const LOAD_ADS_SUCCESS = 'LOAD_ADS_SUCCESS';
export const LOAD_ADS_FAILURE = 'LOAD_ADS_FAILURE';
export const SELECT_TAG = 'SELECT_TAG';
export const SELECT_AD_TYPE = 'SELECT_ADD_TYPE';

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
  type: LOAD_ADS_REQUEST,
});

const loadAdsSuccess = (ads) => ({
  type: LOAD_ADS_SUCCESS,
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
  dispatch({ type: SELECT_TAG, tag: tag });
  loadAds(dispatch, `tag=${tag}`)
}

export function selectAdType(type, dispatch) {
  dispatch({ type: SELECT_AD_TYPE, adType: type });
  loadAds(dispatch, `venta=${!(type === 'buy')}`)
}

export function submitSearch(search, dispatch) {
  loadAds(dispatch, `name=${search}`)
}