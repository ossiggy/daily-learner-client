import {
  FETCH_ALL_ARTICLES_SUCCESS,
  fetchAllArticlesSuccess,
  FETCH_ALL_ARTICLES_ERROR,
  fetchAllArticlesError,
  FETCH_ALL_ARTICLES_REQUEST,
  fetchAllArticlesRequest,
  fetchAllArticles
} from './articles';

import {API_BASE_URL} from '../config';


describe('fetchAllArticlesSuccess', () => {
  it('Should return the action', () => {
    const articles = {title: 'title'};
    const action = fetchAllArticlesSuccess(articles);
    expect(action.type).toEqual(FETCH_ALL_ARTICLES_SUCCESS);
    expect(action.articles).toEqual({title: 'title'});
  });
});

describe('fetchAllArticlesRequest', () => {
  it('Should return the action', () => {
    const action = fetchAllArticlesRequest();
    expect(action.type).toEqual(FETCH_ALL_ARTICLES_REQUEST);
  });
});

describe('fetchAllArticlesError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = fetchAllArticlesError(error);
    expect(action.type).toEqual(FETCH_ALL_ARTICLES_ERROR);
    expect(action.error).toEqual('error');
  });
});

describe('fetchAllArticles', () => {
  it('Should dispatch fetchAllArticlesSuccess', () => {
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

    const getState = () => ({auth: {authToken: 12345}});
    const dispatch = jest.fn();
    return fetchAllArticles()(dispatch, getState).then(() => {
      const authToken = getState().auth.authToken;
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/articles`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
          mode: 'cors'
        }
      });
      expect(dispatch).toHaveBeenCalledWith(fetchAllArticlesSuccess(article));
    });
  });
});