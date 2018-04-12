import {userReducer} from './users';

import * as actions from '../actions/users';

describe('userReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = userReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      data: null,
      error: null,
      loading: false
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = userReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('registerUserSuccess', () => {
    it('Should add the user to the state', () => {
      const user = {
        username: 'user'
      };
      const state = userReducer(undefined, actions.registerUserSuccess(user));
      expect(state).toEqual({
        data: user,
        error: null,
        loading: false
      });
    });
  });

  describe('resgisterUserRequest', () => {
    it('Should set state loading to true', () => {
      const state = userReducer(undefined, actions.registerUserRequest());
      expect(state).toEqual({
        data:null,
        error:null,
        loading:true
      });
    });
  });

  describe('registerUserError', () => {
    it('Should return the error', () => {
      const error = 'err';
      const state = userReducer(undefined, actions.registerUserError(error));
      expect(state).toEqual({
        data:null,
        error:error,
        loading:false
      });
    });
  });
});