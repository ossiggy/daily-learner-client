import {
  FETCH_ALL_ARTICLES_SUCCESS,
  fetchAllArticlesSuccess,
  FETCH_ALL_ARTICLES_ERROR,
  fetchAllArticlesError,
  FETCH_ALL_ARTICLES_REQUEST,
  fetchAllArticlesRequest,
  fetchAllArticles
} from './articles';

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