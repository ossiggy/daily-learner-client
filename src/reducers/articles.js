import * as actions from '../actions/articles';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const articlesReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_ALL_ARTICLES_SUCCESS) {
    return Object.assign({}, state, {
      data: action.articles,
      loading: false,
    });
  }
  if(action.type === actions.FETCH_ALL_ARTICLES_REQUEST) {
    return Object.assign({}, state, {
      data: null,
      loading: true
    });
  }
  if(action.type === actions.FETCH_ALL_ARTICLES_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};