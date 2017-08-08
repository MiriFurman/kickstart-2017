import {expect} from 'chai';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {useFakeTimers, spy} from 'sinon';
import ExpandingWidget from './ExpandingWidget';
import {noop} from 'lodash/fp';
import constants from '../../constants';


describe('ExpandingWidget', () => {
  let clock;
  const defaultWidthValue = (constants.EXPANDING.MAX - constants.EXPANDING.MIN) / 2;
  const defaultWidth = `${defaultWidthValue}px`;

  beforeEach(() => {
    clock = useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  const createWidget = props => ReactTestUtils.renderIntoDocument(React.createElement(ExpandingWidget, props));

  it('should render', () => {
    const expandingWidget = createWidget({reportAction: noop});
    expect(expandingWidget).to.be.ok;
  });

  describe('mouse enter', () => {
    it('should report action', () => {
      const reportActionSpy = spy();
      const expandingWidget = createWidget({reportAction: reportActionSpy});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(ExpandingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('mouseEnter');
      expect(reportArgs.value).to.equal(defaultWidthValue);
    });

    it('should not change size on mouse enter', () => {
      const expandingWidget = createWidget({reportAction: noop});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'visual');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'expanding-bar');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});

      expect(visualElement.style.width).to.equal(defaultWidth);
    });

    it('should change size on mouse enter after given time ', () => {
      const expandingWidget = createWidget({reportAction: noop});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'visual');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'expanding-bar');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.width).to.equal('105px');
    });
  });

  describe('mouse leave', () => {
    it('should stop rotating', () => {
      const expandingWidget = createWidget({reportAction: noop});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'visual');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'expanding-bar');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});
      ReactTestUtils.Simulate.mouseLeave(triggerElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.width).to.equal('105px');

      clock.tick(constants.WIDGET_DELAY);

      expect(visualElement.style.width).to.equal('105px');
    });

    it('should report mouse leave', () => {
      const reportActionSpy = spy();
      const expandingWidget = createWidget({reportAction: reportActionSpy});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'visual');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});
      ReactTestUtils.Simulate.mouseLeave(triggerElement, {});

      const reportArgs = reportActionSpy.args[1][0];
      expect(reportArgs.widget).to.equal(ExpandingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('mouseLeave');
      expect(reportArgs.value).to.equal(defaultWidthValue);
    });
  });

  describe('reset button', () => {
    it('should reset the width', () => {
      const expandingWidget = createWidget({reportAction: noop});
      const triggerElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'visual');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'expanding-bar');
      const resetButton = ReactTestUtils.findRenderedDOMComponentWithTag(expandingWidget, 'button');

      ReactTestUtils.Simulate.mouseEnter(triggerElement, {});

      clock.tick(constants.WIDGET_DELAY);
      expect(visualElement.style.width).to.equal('105px');

      ReactTestUtils.Simulate.click(resetButton);

      expect(visualElement.style.width).to.equal(defaultWidth);
    });

    it('should report reset action', () => {
      const reportActionSpy = spy();
      const expandingWidget = createWidget({reportAction: reportActionSpy});
      const resetButton = ReactTestUtils.findRenderedDOMComponentWithTag(expandingWidget, 'button');

      ReactTestUtils.Simulate.click(resetButton);

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(ExpandingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('reset');
      expect(reportArgs.value).to.equal(defaultWidthValue);
    });
  });

  describe('input', () => {
    it('should update width', () => {
      const expandingWidget = createWidget({reportAction: noop});
      const widthInput = ReactTestUtils.findRenderedDOMComponentWithTag(expandingWidget, 'input');
      const visualElement = ReactTestUtils.findRenderedDOMComponentWithClass(expandingWidget, 'expanding-bar');

      widthInput.value = 150;
      ReactTestUtils.Simulate.change(widthInput);

      expect(visualElement.style.width).to.equal('150px');
    });

    it('should report action', () => {
      const reportActionSpy = spy();
      const expandingWidget = createWidget({reportAction: reportActionSpy});
      const widthInput = ReactTestUtils.findRenderedDOMComponentWithTag(expandingWidget, 'input');

      widthInput.value = 100;
      ReactTestUtils.Simulate.change(widthInput);

      const reportArgs = reportActionSpy.args[0][0];
      expect(reportArgs.widget).to.equal(ExpandingWidget.displayName);
      expect(reportArgs.time).to.be.ok;
      expect(reportArgs.source).to.equal('input');
      expect(reportArgs.value).to.equal(100);
    });
  });
});
