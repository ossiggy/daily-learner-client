import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {fetchAllArticles} from './articles';

export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const fetchArticleSuccess = article => ({
  type: FETCH_ARTICLE_SUCCESS,
  article
});

export const FETCH_ARTICLE_REQUEST ='FETCH_ARTICLE_REQUEST';
export const fetchArticleRequest = () => ({
  type: FETCH_ARTICLE_REQUEST
});

export const FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR';
export const fetchArticleError =(err) => ({
  type: FETCH_ARTICLE_ERROR,
  error: err
});

export const fetchArticle = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/articles/${id}`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(article => dispatch(fetchArticleSuccess(article)))
    .catch(err => console.error(err));
};

export const POST_ARTICLE_SUCCESS = 'POST_ARTICLE_SUCCESS';
export const postArticleSuccess = article => ({
  type: POST_ARTICLE_SUCCESS,
  article
});

export const POST_ARTICLE_REQUEST ='POST_ARTICLE_REQUEST';
export const postArticleRequest = () => ({
  type: POST_ARTICLE_REQUEST
});

export const POST_ARTICLE_ERROR = 'POST_ARTICLE_ERROR';
export const postArticleError =(err) => ({
  type: POST_ARTICLE_ERROR,
  error: err
});

export const postArticle = article => (dispatch, getState) => {
  article._parent = getState().auth.currentUser.id;
  return fetch(`${API_BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(article)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(article => dispatch(postArticleSuccess(article)))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS';
export const updateArticleSuccess = article => ({
  type: UPDATE_ARTICLE_SUCCESS,
  article
});

export const UPDATE_ARTICLE_REQUEST ='UPDATE_ARTICLE_REQUEST';
export const updateArticleRequest = () => ({
  type: UPDATE_ARTICLE_REQUEST
});

export const UPDATE_ARTICLE_ERROR = 'UPDATE_ARTICLE_ERROR';
export const updateArticleError =(err) => ({
  type: UPDATE_ARTICLE_ERROR,
  error: err
});

export const updateArticle = article => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/articles/${article.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(article)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(article => dispatch(updateArticleSuccess(article)))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const deleteArticleSuccess = () => ({
  type: DELETE_ARTICLE_SUCCESS
});

export const DELETE_ARTICLE_REQUEST ='DELETE_ARTICLE_REQUEST';
export const deleteArticleRequest = () => ({
  type: DELETE_ARTICLE_REQUEST
});

export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
export const deleteArticleError = (err) => ({
  type: DELETE_ARTICLE_ERROR,
  error: err
});

export const deleteArticle = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers:{
      Authorization: `Bearer ${authToken}`,
      mode: 'cors'
    }
  }).then(() => dispatch(deleteArticleSuccess()))
    .then(() => dispatch(fetchAllArticles()));
};

// form reset action that will reset article form when component unmounts
export const RESET = 'RESET';
export const reset = () => ({
  type: RESET
});