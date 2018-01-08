import React from 'react';
import {shallow, mount} from 'enzyme';

import {ArticleViewer} from '../components/article-viewer';

describe('<ArticleViewer />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<ArticleViewer dispatch={dispatch}/>);
  });
});