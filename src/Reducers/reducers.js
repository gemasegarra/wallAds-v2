import { combineReducers } from 'redux';
import * as TYPES from '../Actions/types';

function username(state = null, action) {
  if (action.type === TYPES.SIGN_IN_SUCCESS) {
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
  if (action.type === TYPES.LOAD_ADS_SUCCESS) {
    return { ...state, ads: action.ads };
  }
  if (action.type === TYPES.SELECT_TAG) {
    return { ...state, tag: action.tag };
  }
  if (action.type === TYPES.SELECT_AD_TYPE) {
    return { ...state, typeOfAd: action.adType };
  }
  return state;
}

const app = combineReducers({
  username,
  ads,
});

export default app;
