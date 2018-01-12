import React from 'react';
import {shallow, mount} from 'enzyme';
import * as actions from '../actions';

import {ArticleUpdater} from '../components/article-updater';

describe('<ArticleUpdater />', () => {
  it('Renders without crashing', () => {
    shallow(<ArticleUpdater />);
  });
  it('Dispatches fetchArticle when mounted', () => {
    const id = 12345;
    const dispatch = jest.fn();
    const wrapper = mount(<ArticleUpdater dispatch={dispatch} />);
    expect(dispatch).toHaveBeenCalledWith(actions.fetchArticle(id));
  });
});