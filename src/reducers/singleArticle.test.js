import {singleArticleReducer} from './singleArticle';

import * as actions from '../actions/singleArticle';

describe('singleArticleReducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = singleArticleReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      data: {},
      error: null,
      loading: false
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = singleArticleReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('fetchArticleSuccess', () => {
    it('Should add the article to the state', () => {
      const article = {title: 'title'};
      const state = singleArticleReducer(undefined, actions.fetchArticleSuccess(article));
      expect(state).toEqual({
        data: article,
        error:null,
        loading:false
      });
    });
  });

  describe('fetchArticleRequest', () => {
    it('Should set state loading to true', () => {
      const state = singleArticleReducer(undefined, actions.fetchArticleRequest());
      expect(state).toEqual({
        data:{},
        error:null,
        loading: true
      });
    });
  });

  describe('fetchArticleError', () => {
    it('Should should return the error', () => {
      const error = 'error';
      const state = singleArticleReducer(undefined, actions.fetchArticleError(error));
      expect(state).toEqual({
        data:{},
        error: error,
        loading: false
      });
    });
  });

  describe('postArticleSuccess', () => {
    it('Should add the article to the state', () => {
      const article = {title: 'title'};
      const state = singleArticleReducer(undefined, actions.postArticleSuccess(article));
      expect(state).toEqual({
        data: article,
        error:null,
        loading:false
      });
    });
  });

  describe('postArticleRequest', () => {
    it('Should set state loading to true', () => {
      const state = singleArticleReducer(undefined, actions.postArticleRequest());
      expect(state).toEqual({
        data:{},
        error:null,
        loading: true
      });
    });
  });

  describe('postArticleError', () => {
    it('Should should return the error', () => {
      const error = 'error';
      const state = singleArticleReducer(undefined, actions.postArticleError(error));
      expect(state).toEqual({
        data:{},
        error: error,
        loading: false
      });
    });
  });

  describe('updateArticleSuccess', () => {
    it('Should add the article to the state', () => {
      const article = {title: 'title'};
      const state = singleArticleReducer(undefined, actions.updateArticleSuccess(article));
      expect(state).toEqual({
        data: article,
        error:null,
        loading:false
      });
    });
  });

  describe('updateArticleRequest', () => {
    it('Should set state loading to true', () => {
      const state = singleArticleReducer(undefined, actions.updateArticleRequest());
      expect(state).toEqual({
        data:{},
        error:null,
        loading: true
      });
    });
  });

  describe('updateArticleError', () => {
    it('Should should return the error', () => {
      const error = 'error';
      const state = singleArticleReducer(undefined, actions.updateArticleError(error));
      expect(state).toEqual({
        data:{},
        error: error,
        loading: false
      });
    });
  });

  describe('deleteArticleSuccess', () => {
    it('Should remove the article from the state', () => {
      const article = {title: 'title'};
      const initialState = {
        data: article,
        error:null,
        loading:null
      };
      const state = singleArticleReducer(initialState, actions.deleteArticleSuccess(article));
      expect(state).toEqual({
        data: null,
        error:null,
        loading:false
      });
    });
  });

  describe('deleteArticleRequest', () => {
    it('Should set state loading to true', () => {
      const state = singleArticleReducer(undefined, actions.deleteArticleRequest());
      expect(state).toEqual({
        data:{},
        error:null,
        loading: true
      });
    });
  });

  describe('deleteArticleError', () => {
    it('Should should return the error', () => {
      const error = 'error';
      const state = singleArticleReducer(undefined, actions.deleteArticleError(error));
      expect(state).toEqual({
        data:{},
        error: error,
        loading: false
      });
    });
  });
});