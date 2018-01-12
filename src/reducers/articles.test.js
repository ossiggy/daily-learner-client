import {articlesReducer} from './articles';

import * as actions from '../actions/articles';

describe('articlesReducer', () => {

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

  describe('fetchAllArticlesSuccess', () => {
    it('Should add the articles to the state', () => {
      const articles = [
        {title: 'title'},
        {title2: 'title2'}
      ];
      const state = articlesReducer(undefined, actions.fetchAllArticlesSuccess(articles));
      expect(state).toEqual({
        data:articles,
        error:null,
        loading:false
      });
    });
  });

  describe('fetchAllArticlesRequest', () => {
    it('Should set state loading to true', () => {
      const state = articlesReducer(undefined, actions.fetchAllArticlesRequest());
      expect(state).toEqual({
        data:null,
        error:null,
        loading:true
      });
    });
  });

  describe('fetchAllArticlesError', () => {
    it('Should return the error', () => {
      const error = 'error';
      const state = articlesReducer(undefined, actions.fetchAllArticlesError(error));
      expect(state).toEqual({
        data:null,
        error: error,
        loading: false
      });
    });
  });
});