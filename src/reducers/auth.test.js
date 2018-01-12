import authReducer from './auth';

import * as actions from '../actions/auth';

describe('authReducer', () => {
  
  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('Should set the authToken in the state', () => {
      const authToken = 12345;
      const state = authReducer(undefined, actions.setAuthToken(authToken));
      expect(state).toEqual({
        authToken: authToken,
        currentUser: null,
      });
    });
  });

  describe('setCurrentUser', () => {
    it('Should set the currentUser in the state', () => {
      const currentUser = {username:'user'};
      const state = authReducer(undefined, actions.setCurrentUser(currentUser));
      expect(state).toEqual({
        authToken: null,
        currentUser: currentUser,
      });
    });
  });

  describe('logout', () => {
    it('Should set authToken and currentUser to null', () => {
      const initialState = {
        authToken: 1234,
        currentUser: {user: 'username'}
      };
      const state = authReducer(initialState, actions.logout());
      expect(state).toEqual({
        authToken: null,
        currentUser: null
      });
    });
  });
});