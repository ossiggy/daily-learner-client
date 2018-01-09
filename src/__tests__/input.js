import React from 'react';
import {shallow} from 'enzyme';

import Input from '../components/input';

describe('<Input />', () => {
  it('Renders without crashing', () => {
    const props = {
      meta: {
        touched: false,
      },
      input: {
        name: 'foo'
      }
    };
    shallow(<Input {...props} />);
  });
});