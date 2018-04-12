import * as actions from '../actions/users';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (state=initialState, action) => {

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
    console.log(action.error);
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};