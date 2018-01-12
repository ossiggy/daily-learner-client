import {
  SET_AUTH_TOKEN,
  setAuthToken,
  SET_CURRENT_USER,
  setCurrentUser,
  login,
  refreshAuthToken,
  LOGOUT,
  logout
} from './auth';

describe('setAuthToken', () => {
  it('Should return the action', () => {
    const authToken = 123456;
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(123456);
  });
});

describe('setCurrentUser', () => {
  it('Should return the action', () => {
    const currentUser = {user: 'user'};
    const action = setCurrentUser(currentUser);
    expect(action.type).toEqual(SET_CURRENT_USER);
    expect(action.currentUser).toEqual({user: 'user'});
  });
});