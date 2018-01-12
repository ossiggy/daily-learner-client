import {singleArticleReducer} from './singleArticle';

import * as actions from '../actions/singleArticle';

describe('singleArticleReducer', () => {
  const article = {
    title: 'title',
    content: 'content',
    category: 'category',
    dateCreated: '1.11.2018'
  };

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
      
    })
  })
});