import React from 'react';
import {shallow, mount} from 'enzyme';

import {fetchArticle} from '../actions';

import {Article} from '../components/article';

describe('<Article />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Article params={{'id': '1234567'}} dispatch={dispatch} />);
  });
});