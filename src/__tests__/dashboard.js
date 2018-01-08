import React from 'react';
import {shallow, mount} from 'enzyme';

import {Dashboard} from '../components/dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<Dashboard dispatch={dispatch} />);
  });
});