import {SubmissionError} from 'redux-form';

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
})

export const fetchAllArticles = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  console.log('fetching articles')
  return fetch(`${API_BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer: ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(articles => dispatch(fetchAllArticlesSuccess(articles)))
  .catch(err => console.error(err))
};

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

export const fetchArticle = (id) => dispatch => {
  return fetch(`${API_BASE_URL}/articles/${id}`).then(res => {
    console.log('fetching single article')
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json({})
  }).then(article => {
    dispatch(fetchArticleSuccess(article));
  });
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
})

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
})

export const updateArticle = article => dispatch => {
  return fetch(`${API_BASE_URL}/articles/:id`, {
      method: 'PUT',
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

export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const deleteArticleSuccess = article => ({
  type: DELETE_ARTICLE_SUCCESS,
  article
});

export const DELETE_ARTICLE_REQUEST ='DELETE_ARTICLE_REQUEST';
export const deleteArticleRequest = () => ({
  type: DELETE_ARTICLE_REQUEST
});

export const DELETE_ARTICLE_ERROR = 'DELETE_ARTICLE_ERROR';
export const deleteArticleError =(err) => ({
  type: DELETE_ARTICLE_ERROR,
  error: err
})

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const deleteArticle = () => dispatch => {
  return fetch(`${API_BASE_URL}/api/articles/:id`, {
    method: 'delete'
  }).then(res => res.send(204))
};