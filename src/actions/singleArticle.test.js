import {
  FETCH_ARTICLE_SUCCESS,
  fetchArticleSuccess,
  FETCH_ARTICLE_REQUEST,
  fetchArticleRequest,
  FETCH_ARTICLE_ERROR,
  fetchArticleError,
  fetchArticle,
  POST_ARTICLE_SUCCESS,
  postArticleSuccess,
  POST_ARTICLE_REQUEST,
  postArticleRequest,
  POST_ARTICLE_ERROR,
  postArticleError,
  postArticle,
  UPDATE_ARTICLE_SUCCESS,
  updateArticleSuccess,
  UPDATE_ARTICLE_REQUEST,
  updateArticleRequest,
  UPDATE_ARTICLE_ERROR,
  updateArticleError,
  updateArticle,
  DELETE_ARTICLE_SUCCESS,
  deleteArticleSuccess,
  DELETE_ARTICLE_REQUEST,
  deleteArticleRequest,
  DELETE_ARTICLE_ERROR,
  deleteArticleError,
  deleteArticle,
  RESET,
  reset
} from './singleArticle';

describe('fetchArticleSuccess', () => {
  it('Should return the action', () => {
    const article = {title: 'title'};
    const action = fetchArticleSuccess(article);
    expect(action.type).toEqual(FETCH_ARTICLE_SUCCESS);
    expect(action.article).toEqual({title: 'title'});
  });
});

describe('fetchArticleRequest', () => {
  it('Should return the action', () => {
    const action = fetchArticleRequest();
    expect(action.type).toEqual(FETCH_ARTICLE_REQUEST);
  });
});

describe('fetchArticleError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = fetchArticleError(error);
    expect(action.type).toEqual(FETCH_ARTICLE_ERROR);
    expect(action.error).toEqual('error');
  });
});

describe('postArticleSuccess', () => {
  it('Should return the action', () => {
    const article = {title: 'title'};
    const action = postArticleSuccess(article);
    expect(action.type).toEqual(POST_ARTICLE_SUCCESS);
    expect(action.article).toEqual({title: 'title'});
  });
});

describe('postArticleRequest', () => {
  it('Should return the action', () => {
    const action = postArticleRequest();
    expect(action.type).toEqual(POST_ARTICLE_REQUEST);
  });
});

describe('postArticleError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = postArticleError(error);
    expect(action.type).toEqual(POST_ARTICLE_ERROR);
    expect(action.error).toEqual('error');
  });
});

describe('updateArticleSuccess', () => {
  it('Should return the action', () => {
    const article = {title: 'title'};
    const action = updateArticleSuccess(article);
    expect(action.type).toEqual(UPDATE_ARTICLE_SUCCESS);
    expect(action.article).toEqual({title: 'title'});
  });
});

describe('updateArticleRequest', () => {
  it('Should return the action', () => {
    const action = updateArticleRequest();
    expect(action.type).toEqual(UPDATE_ARTICLE_REQUEST);
  });
});

describe('updateArticleError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = updateArticleError(error);
    expect(action.type).toEqual(UPDATE_ARTICLE_ERROR);
    expect(action.error).toEqual('error');
  });
});

describe('deleteArticleSuccess', () => {
  it('Should return the action', () => {
    const article = {title: 'title'};
    const action = deleteArticleSuccess(article);
    expect(action.type).toEqual(DELETE_ARTICLE_SUCCESS);
    expect(action.article).toEqual({title: 'title'});
  });
});

describe('deleteArticleRequest', () => {
  it('Should return the action', () => {
    const action = deleteArticleRequest();
    expect(action.type).toEqual(DELETE_ARTICLE_REQUEST);
  });
});

describe('deleteArticleError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = deleteArticleError(error);
    expect(action.type).toEqual(DELETE_ARTICLE_ERROR);
    expect(action.error).toEqual('error');
  });
});

describe('reset', () => {
  it('Should return the action', () => {
    const action = reset();
    expect(action.type).toEqual(RESET);
  });
});