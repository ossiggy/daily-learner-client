import React from 'react';
import {shallow, mount} from 'enzyme';
import * as actions from '../actions';

import {ArticleUpdater} from '../components/article-updater';

describe('<ArticleUpdater />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<ArticleUpdater dispatch={dispatch} />);
  });
});