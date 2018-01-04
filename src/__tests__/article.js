import React from 'react';
import {shallow, mount} from 'enzyme';

import Article from '../components/article';

describe('<Article />', () => {
  it('Renders without crashing', () => {
    shallow(<Article />);
  })
})