import {
  FETCH_USER_SUCCESS,
  fetchUserSuccess,
  FETCH_USER_REQUEST,
  fetchUserRequest,
  FETCH_USER_ERROR,
  fetchUserError,
  fetchUser,
  REGISTER_USER_SUCCESS,
  registerUserSuccess,
  REGISTER_USER_REQUEST,
  registerUserRequest,
  REGISTER_USER_ERROR,
  registerUserError,
  registerUser
} from './users';

describe('fetchUserSuccess', () => {
  it('Should return the action', () => {
    const user = {username: 'name'};
    const action = fetchUserSuccess(user);
    expect(action.type).toEqual(FETCH_USER_SUCCESS);
    expect(action.user).toEqual({username: 'name'});
  });
});

describe('fetchUserRequest', () => {
  it('Should return the action', () => {
    const action = fetchUserRequest();
    expect(action.type).toEqual(FETCH_USER_REQUEST);
  });
});

describe('fetchUserError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = fetchUserError(error);
    expect(action.type).toEqual(FETCH_USER_ERROR);
    expect(action.error).toEqual('error');
  });
});

describe('registerUserSuccess', () => {
  it('Should return the action', () => {
    const user = {username: 'name'};
    const action = registerUserSuccess(user);
    expect(action.type).toEqual(REGISTER_USER_SUCCESS);
    expect(action.user).toEqual({username: 'name'});
  });
});

describe('registerUserRequest', () => {
  it('Should return the action', () => {
    const action = registerUserRequest();
    expect(action.type).toEqual(REGISTER_USER_REQUEST);
  });
});

describe('registerUserError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = registerUserError(error);
    expect(action.type).toEqual(REGISTER_USER_ERROR);
    expect(action.error).toEqual('error');
  });
});