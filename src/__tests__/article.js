import React from 'react';
import {shallow, mount} from 'enzyme';

import {fetchArticle} from '../actions';

import {Article} from '../components/article';

describe('<Article />', () => {
  it('Renders without crashing', () => {
    const props = {
      params :{
        id: 123456
      }
    };
    const dispatch = jest.fn();
    shallow(<Article props={props} dispatch={dispatch} />);
    expect(dispatch).toHaveBeenCalledWith(fetchArticle);
  });
});