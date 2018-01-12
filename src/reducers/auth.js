import {
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  LOGOUT
} from '../actions';

const initialState = {
  authToken: null,
  currentUser: null,
};

export default function authReducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === SET_CURRENT_USER) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    });
  } else if (action.type === LOGOUT) {
    return Object.assign({}, state, {
      currentUser: null,
      authToken: null
    });
  }
  return state;
}
