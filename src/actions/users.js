import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const registerUserSuccess = user => ({
  type: REGISTER_USER_SUCCESS,
  user
});

export const REGISTER_USER_REQUEST ='REGISTER_USER_REQUEST';
export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST
});

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const registerUserError = (err) => ({
  type: REGISTER_USER_ERROR,
  error: err
});

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      mode: 'cors'
    },
    body: JSON.stringify(user)
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
