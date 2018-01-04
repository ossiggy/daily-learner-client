import React from 'react';
import {shallow, mount} from 'enzyme';

import ArticleUpdater from '../components/article-updater';

describe('<ArticleUpdater />', () => {
  it('Renders without crashing', () => {
    shallow(<ArticleUpdater />);
  })
})