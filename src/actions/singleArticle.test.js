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

import {fetchAllArticles} from './articles';

import {API_BASE_URL} from '../config';

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

describe('fetchArticle', () => {
  it('Should dispatch fetchArticleSuccess', () => {
    const article = {
      title: 'title'
    };

    const id = 12345;

    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json() {
          return article;
        }
      })
    );

    const getState = () => ({auth: {authToken: 12345}});
    const dispatch = jest.fn();
    return fetchArticle(id)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/articles/${id}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer 12345'
        }
      });
      expect(dispatch).toHaveBeenCalledWith(fetchArticleSuccess(article));
    });
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

describe('postArticle', () => {
  it('Should dispatch postArticleSuccess', () => {
    const article = {
      title: 'title'
    };

    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json() {
          return article;
        }
      })
    );

    const getState = () => ({auth: {currentUser: {id: 12345}}});
    const dispatch = jest.fn();
    return postArticle(article)(dispatch, getState).then(() => {
      article._parent = getState().auth.currentUser.id;
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/articles`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(article)
      });
      expect(dispatch).toHaveBeenCalledWith(postArticleSuccess(article));
    });
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

describe('updateArticle', () => {
  it('Should dispatch updateArticleSuccess', () => {
    const article = {
      id: 12345,
      title: 'title'
    };

    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json() {
          return article;
        }
      })
    );

    const getState = () => ({auth: {authToken: 12345}});
    const dispatch = jest.fn();
    return updateArticle(article)(dispatch, getState).then(() => {
      const authToken = getState().auth.authToken;
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/articles/${article.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(article)
      });
      expect(dispatch).toHaveBeenCalledWith(updateArticleSuccess(article));
    });
  });
});

describe('deleteArticleSuccess', () => {
  it('Should return the action', () => {
    const action = deleteArticleSuccess();
    expect(action.type).toEqual(DELETE_ARTICLE_SUCCESS);
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

describe('deleteArticle', () => {
  it('Should dispatch deleteArticleSuccess upon completion', () => {

    const id = 12345;

    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true
      })
    );

    const getState = () => ({auth: {authToken: 12345}});
    const dispatch = jest.fn();
    return deleteArticle(id)(dispatch, getState).then(() => {
      const authToken = getState().auth.authToken;
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/articles/${id}`, {
        method: 'DELETE',
        headers:{
          Authorization: `Bearer ${authToken}`,
          mode: 'cors'
        }
      });
      expect(dispatch).toHaveBeenCalledWith(deleteArticleSuccess());
    });
  });
});

describe('reset', () => {
  it('Should return the action', () => {
    const action = reset();
    expect(action.type).toEqual(RESET);
  });
});