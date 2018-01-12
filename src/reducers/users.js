import * as actions from '../actions/users';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_USER_SUCCESS) {
    return Object.assign({}, state, {
      data: action.user, //I am expecting an array to be returned from this action
      loading: false
    });
  }
  if(action.type === actions.FETCH_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if(action.type === actions.FETCH_USER_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if(action.type === actions.REGISTER_USER_SUCCESS) {
    console.log(action.user);
    return Object.assign({}, state, {
      data: action.user,
      loading: false
    });
  }
  if(action.type === actions.REGISTER_USER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if(action.type === actions.REGISTER_USER_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};