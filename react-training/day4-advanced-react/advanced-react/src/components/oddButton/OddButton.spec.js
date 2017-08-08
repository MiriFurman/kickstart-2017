import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';
import {stub} from 'sinon';
import OddButton from './OddButton';

describe('OddButton', () => {

  const createButton = props => ReactTestUtils.renderIntoDocument(React.createElement(OddButton, props));

  it('should render', () => {
    const oddButton = createButton({date: new Date()});
    expect(oddButton).to.be.ok;
  });

  it('should be enabled for odd day', () => {
    const date = new Date();
    stub(date, 'getDay').returns(3);
    const oddButton = createButton({date});

    const button = ReactTestUtils.findRenderedDOMComponentWithTag(oddButton, 'button');

    expect(button.disabled).to.be.false;
  });

  it('should be disabled for odd day', () => {
    const date = new Date();
    stub(date, 'getDay').returns(2);
    const oddButton = createButton({date});

    const button = ReactTestUtils.findRenderedDOMComponentWithTag(oddButton, 'button');

    expect(button.disabled).to.be.true;
  });
});
