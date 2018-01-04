import React from 'react';
import {shallow, mount} from 'enzyme';

import ArticleForm from '../components/article-form';

describe('<ArticleForm />', () => {
  it('Renders without crashing', () => {
    shallow(<ArticleForm />);
  })
})