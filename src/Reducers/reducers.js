import { combineReducers } from 'redux';
import {
  SIGN_IN_SUCCESS,
} from '../Actions/actions';

function username(state = null, action) {
  if (action.type === SIGN_IN_SUCCESS) {
    return action.username;
  }
  return state;
}

const app = combineReducers({
  username,
});

export default app;
