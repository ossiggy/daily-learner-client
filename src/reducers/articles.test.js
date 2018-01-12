import {articlesReducer} from './articles';

import * as actions from '../actions/articles';

describe('articlesReducer', () => {
  const article = {
    title: 'title',
    content: 'content',
    category: 'category',
    dateCreated: '1.11.2018'
  };

  it('Should set the initial state when nothing is passed in', () => {
    const state = articlesReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      data: null,
      error: null,
      loading: false
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = articlesReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});