import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_ALL_ARTICLES_SUCCESS = 'FETCH_ALL_ARTICLES_SUCCESS';
export const fetchAllArticlesSuccess = articles => ({
  type: FETCH_ALL_ARTICLES_SUCCESS,
  articles
});

export const FETCH_ALL_ARTICLES_REQUEST ='FETCH_ALL_ARTICLES_REQUEST';
export const fetchAllArticlesRequest = () => ({
  type: FETCH_ALL_ARTICLES_REQUEST
});

export const FETCH_ALL_ARTICLES_ERROR = 'FETCH_ALL_ARTICLES_ERROR';
export const fetchAllArticlesError =(err) => ({
  type: FETCH_ALL_ARTICLES_ERROR,
  error: err
});

export const fetchAllArticles = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchAllArticlesRequest());
  return fetch(`${API_BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      mode: 'cors'
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(articles => dispatch(fetchAllArticlesSuccess(articles)))
    .catch(err => console.error(err));
};