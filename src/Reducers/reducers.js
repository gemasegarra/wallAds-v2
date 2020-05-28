import { combineReducers } from 'redux';
import {
  SIGN_IN_SUCCESS,
  LOAD_ADS_SUCCESS,
} from '../Actions/actions';

function username(state = null, action) {
  if (action.type === SIGN_IN_SUCCESS) {
    return action.username;
  }
  return state;
}

const adsInitialState = {
  ads: [],
};

function ads(state = adsInitialState, action) {
  if (action.type === LOAD_ADS_SUCCESS) {
    return { ...state, ads: action.ads };
  }
  return state;
}

const app = combineReducers({
  username,
  ads,
});

export default app;
