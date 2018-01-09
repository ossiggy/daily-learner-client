import React from 'react';
import {shallow, mount} from 'enzyme';

import {Article} from '../components/article';

const mockFetchArticleAction = {
  type: 'FETCH_ARTICLE'
};
jest.mock('../actions', () => Object.assign({},
  require.requireActual('../actions'),
  {
    fetchArticle: jest.fn().mockImplementation(() => {
      return mockFetchArticleAction;
    })
  }
));

describe('<Article />', () => {
  it('Renders without crashing', () => {
    const props = {
      match:{
        params :{
          id: 123456
        }
      }
    };
    const dispatch = jest.fn();
    shallow(<Article {...props} dispatch={dispatch} />);
    expect(dispatch).toHaveBeenCalledWith(mockFetchArticleAction);
  });
});