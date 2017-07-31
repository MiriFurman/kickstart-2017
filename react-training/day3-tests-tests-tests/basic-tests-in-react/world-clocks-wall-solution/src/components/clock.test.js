import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';

import Location from '../location';
import Clock from './clock';

describe('Clock Component', () => {
  it('should render the passed Label of the Clock', () => {
    const localTime = 122333444455555;
    const detachedDiv = document.createElement('div');
    const clockComponent = ReactDOM.render(<Clock timeInMs={localTime} location={Location('Tel Aviv', 0)} />, detachedDiv);

    const labelElement = ReactTestUtils.findRenderedDOMComponentWithClass(clockComponent, 'clock-label');

    expect(labelElement.textContent).to.eq('Tel Aviv');
  });
});

