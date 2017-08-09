import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';
import OddButtonWithCurrentDate from './OddButtonWithCurrentDate';

describe('OddButtonWithCurrentDate', () => {

  const createButton = props => ReactTestUtils.renderIntoDocument(React.createElement(OddButtonWithCurrentDate, props));

  it('should render', () => {
    const oddButtonWithCurrentDate = createButton({});
    expect(oddButtonWithCurrentDate).to.be.ok;
  });

  it('should be enabled if today is an odd day', () => {
    const date = new Date();
    const currentDay = date.getDay();
    const isOddDay = !!(currentDay % 2);

    const oddButtonWithCurrentDate = createButton();
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(oddButtonWithCurrentDate, 'button');

    expect(button.disabled).to.equal(!isOddDay);
  });
});
