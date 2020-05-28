import { combineReducers } from 'redux';
import {
  SIGN_IN_SUCCESS,
  LOAD_ADS_SUCCESS,
  SELECT_TAG,
  SELECT_AD_TYPE,
} from '../Actions/actions';

function username(state = null, action) {
  if (action.type === SIGN_IN_SUCCESS) {
    return action.username;
  }
  return state;
}

const adsInitialState = {
  ads: [],
  selectedTag: '',
  typeOfAd: Boolean,
};

function ads(state = adsInitialState, action) {
  if (action.type === LOAD_ADS_SUCCESS) {
    return { ...state, ads: action.ads };
  }
  if (action.type === SELECT_TAG) {
    return { ...state, tag: action.tag };
  }
  if (action.type === SELECT_AD_TYPE) {
    return { ...state, typeOfAd: action.adType };
  }
  return state;
}

const app = combineReducers({
  username,
  ads,
});

export default app;
