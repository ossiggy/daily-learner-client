import authReducer from './auth';

import * as actions from '../actions/auth';

describe('authReducer', () => {
  const auth = {
    authToken: 1234567,
    currentUser: 'user',
    userId: '1234'
  };

  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      userId: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});