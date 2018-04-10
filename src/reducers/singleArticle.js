import * as actions from '../actions/singleArticle';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const singleArticleReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_ARTICLE_SUCCESS) {
    return Object.assign({}, state, {
      data: action.article,
      loading: false,

    });
  }
  if(action.type === actions.FETCH_ARTICLE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if(action.type === actions.FETCH_ARTICLE_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if(action.type === actions.POST_ARTICLE_SUCCESS) {
    return Object.assign({}, state, {
      data: action.article,
      loading: false
    });
  }
  if(action.type === actions.POST_ARTICLE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if(action.type === actions.POST_ARTICLE_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if(action.type === actions.UPDATE_ARTICLE_SUCCESS) {
    return Object.assign({}, state, {
      data: action.article
    });
  }
  if(action.type === actions.UPDATE_ARTICLE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if(action.type === actions.UPDATE_ARTICLE_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  if(action.type === actions.DELETE_ARTICLE_SUCCESS) {
    return Object.assign({}, state, {
      data: null,
      loading: false
    });
  }
  if(action.type === actions.DELETE_ARTICLE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  if(action.type === actions.DELETE_ARTICLE_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  if(action.type === actions.RESET){
    return Object.assign({}, state, {
      data: {}
    });
  }
  return state;
};

