import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

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
})

export const fetchArticle = () => dispatch => {
  return fetch(`${API_BASE_URL}/articles/:id`).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(article => {
    dispatch(fetchArticleSuccess(article));
  });
};

export const postArticle = article => dispatch => {
    return fetch(`${API_BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(article)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
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