import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import {App} from '../components/app';

spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});