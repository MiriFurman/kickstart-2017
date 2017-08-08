import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {spy} from 'sinon';
import {noop} from 'lodash/fp';
import Footer from './Footer';


describe('Footer', () => {
  const createFooter = props => ReactTestUtils.renderIntoDocument(React.createElement(Footer, props));

  it('should render', () => {
    const footer = createFooter({clearUserActions: noop, transitionDelay: 10});
    expect(footer).to.be.ok;
  });

  it('should not render ContactUs component or clear log button', () => {
    const footer = createFooter({clearUserActions: noop, transitionDelay: 10});
    const contactUs = ReactTestUtils.scryRenderedDOMComponentsWithClass(footer, 'contact-us');
    const clearButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(footer, 'clear-actions-button');
    expect(contactUs).to.be.empty;
    expect(clearButton).to.be.empty;
  });

  describe('mouseEnter', () => {
    it('should render ContactUs component ', () => {
      const footer = createFooter({clearUserActions: noop, transitionDelay: 10});
      const footerNode = ReactTestUtils.findRenderedDOMComponentWithClass(footer, 'Footer');

      ReactTestUtils.Simulate.mouseEnter(footerNode);

      const contactUs = ReactTestUtils.scryRenderedDOMComponentsWithClass(footer, 'contact-us');
      expect(contactUs).not.to.be.empty;
    });

    it('should render clear log button', () => {
      const footer = createFooter({clearUserActions: noop, transitionDelay: 10});
      const footerNode = ReactTestUtils.findRenderedDOMComponentWithClass(footer, 'Footer');

      ReactTestUtils.Simulate.mouseEnter(footerNode);

      const clearButton = ReactTestUtils.findRenderedDOMComponentWithClass(footer, 'clear-actions-button');
      expect(clearButton).not.to.be.empty;
    });
  });

  describe('clearUserActions', () => {
    it('should invoke when clicking on clear button', () => {
      const clearActionsSpy = spy();
      const footer = createFooter({clearUserActions: clearActionsSpy, transitionDelay: 10});
      const footerNode = ReactTestUtils.findRenderedDOMComponentWithClass(footer, 'Footer');

      ReactTestUtils.Simulate.mouseEnter(footerNode);

      const clearButton = ReactTestUtils.findRenderedDOMComponentWithClass(footer, 'clear-actions-button');

      ReactTestUtils.Simulate.click(clearButton);

      expect(clearActionsSpy.called).to.be.true;
    });
  });
});
