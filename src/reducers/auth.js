import {
  FETCH_ALL_ARTICLES_SUCCESS,
  FETCH_ALL_ARTICLES_ERROR
} from '../actions';

const initialState = {
  data: '',
  error: null
};

export default function authReducer(state = initialState, action) {
  if (action.type === FETCH_ALL_ARTICLES_SUCCESS) {
      return Object.assign({}, state, {
          data: action.data,
          error: null
      });
  } else if (action.type === FETCH_ALL_ARTICLES_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}
