import headerReducer from './header';

import * as actions from '../actions/header';

describe('headerReducer', () => {

  it('Should set the inital state when nothing is passed in', () => {
    const state = headerReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      menuOpen: false
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = headerReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('menuToggle', () => {
    it('Should toggle the menu presence from false to true', () => {
      const state = headerReducer(undefined, actions.menuToggle());
      expect(state).toEqual({
        menuOpen: true
      });
    });
  });
});